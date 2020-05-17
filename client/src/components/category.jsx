import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import {
  CardButton,
  FlexGrid,
  GridColumn,
  Card,
  Buttons,
  Postit
} from "./shared/comps";
import {
  getOneCategory,
  getAllJots,
  getOneJot,
  postJot,
  putJot,
  destroyJot,
} from "../services/APIhelper";

export default class ShowCategory extends Component {
  state = {
    category: null,
    jots: null,
    currentUser: null,
  };

  async componentDidMount() {
    if (this.props.categoryId != null && this.props.currentUser != null) {
      this.setCategory(this.props.currentUser.id, this.props.categoryId);
      this.readAllJots(this.props.currentUser.id, this.props.categoryId);
      console.log("read my jots goddamn it");
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    if (
      this.props.categoryId !== prevProps.categoryId &&
      this.props.categoryId != null &&
      this.props.currentUser != null &&
      this.props.currentUser !== prevProps.currentUser
    ) {
      console.log("hello this is a test");
      this.setState({
        currentUser: this.props.currentUser,
      });
      this.setCategory(this.props.currentUser.id, this.props.categoryId);
      this.readAllJots(this.props.currentUser.id, this.props.categoryId);
      console.log("read my jots goddamn it");
    }
  }

  setCategory = async (user_id, category_id) => {
    const category = await getOneCategory(user_id, category_id);
    this.setState({ category });
  };

  readAllJots = async (user_id, category_id) => {
    const getJots = await getAllJots(user_id, category_id);
    this.setState({ jots: getJots });
  };

  handleJotDelete = async (user_id, category_id, jotID) => {
    await destroyJot(user_id, category_id, jotID);
    this.setState((prevState) => ({
      jots: prevState.jots.filter((jot) => {
        return jot.id !== jotID;
      }),
    }));
  };

  

  render() {
    const { jots } = this.state;
    return (
      <div>
        <h2>Jots</h2>
        <FlexGrid>
          {jots && (
            <>
              {jots.map((jot) => (
                <>
                <GridColumn>
                  <div key={jot.id}>
                     <Postit>
                      <h3>{jot.title}</h3>
                      <p>{jot.note}</p>
                      <Buttons>
                        <CardButton onClick={() => {}}>
                          <Link
                            to={`/categories/${this.props.categoryId}/jots/${jot.id}/edit`}
                          >
                            Edit
                          </Link>
                        </CardButton>
                        <CardButton
                          onClick={() => {
                            this.handleJotDelete(
                              this.props.currentUser.id,
                              this.props.categoryId,
                              jot.id
                            );
                          }}
                        >
                            Delete
                        </CardButton>
                        </Buttons>
                        </Postit> 

                  </div>
                  </GridColumn>
                </>
              ))}
            </>
          )}
        </FlexGrid>
        <Link to={`/categories/${this.props.categoryId}/jots/newJot`}>
            <button>Create</button>
          </Link>
      </div>
    );
  }
}
