import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import {
  getOneCategory,
  getAllJots,
  getOneJot,
  postJot,
  putJot,
  destroyJot,
} from "../services/APIhelper";
import CreateJot from './CreateJot'

export default class ShowCategory extends Component {
  state = {
    category: null,
    jots: [],
    currentUser: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    console.log("hello");
    if (
      this.props.currentUser != null &&
      this.props.currentUser !== prevProps.currentUse &&
      this.props.categoryId !== null
    ) {
      console.log("hello2");
      this.setState({
        currentUser: this.props.currentUser,
      });
      this.readAllJots(this.props.currentUser.id, this.props.categoryId);
      this.setCategory(this.props.currentUser.id, this.props.categoryId);
    }
  }

  setCategory = async (user_id, category_id) => {
    const category = await getOneCategory(user_id, category_id);
    this.setState({ category });
  };

  // handleChange = (e) => {
  //   const { value } = e.target;
  //   this.setState({
  //     flavor: value
  //   })
  // }

  readAllJots = async (user_id, category_id) => {
    const getJots = await getAllJots(user_id, category_id);
    this.setState({ jots: getJots });
  };

  handleJotSubmit = async (user_id, category_id, jotData) => {
    const newJot = await postJot(user_id, category_id, jotData);
    this.setState((prevState) => ({
      jots: [...prevState.jots, newJot],
    }));
  };

  handleJotUpdate = async (user_id, category_id, jotID, jotData) => {
    const updatedJot = await putJot(user_id, category_id, jotID, jotData);
    this.readAllJots(this.props.currentUser.id, this.props.categoryId);
  };

  handleJotDelete = async (user_id, category_id, jotID) => {
    await destroyJot(user_id, category_id, jotID);
    this.setState((prevState) => ({
      categories: prevState.categories.filter((category) => {
        return category.id !== category_id;
      }),
    }));
  };
  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const food = await addFlavor(this.state.flavor, this.state.food.id);
  //   this.setState({ food });
  // }

  render() {
    const { jots } = this.state;
    return (
      <div>
      <h2>Jots</h2>
        {jots && (
          <>
            {jots.map((jot) => (
              <>
                <h3 key={jot.id}>{jot.title}</h3>
                <p key={jot.id}>{jot.title}</p>
              </>
            ))}
          </>
        )}
        {/* <Route path='/categories/:id/jots/:jotid' render={(props) => (
          <ShowJot
            {...props}
            handleLogin={this.props.handleLogin}
          />
        )} /> */}

        <Route
          path="/categories/:id/jots/new"
          render={(props) => (
            <CreateJot
              {...props}
              currentUser={this.props.currentUser}
              handleJotSubmit={this.handleJotSubmit}
            />
          )}
        />

        {/* <Route
          path="/categories/:id/edit"
          render={(props) => {
            const { id } = props.match.params;
            return (
              <UpdateCategory
                {...props}
                currentUser={this.state.currentUser}
                handleCategoryUpdate={this.handleCategoryUpdate}
                categoryId={id}
              />
            );
          }}
        /> */}
      </div>
    );
  }
}
