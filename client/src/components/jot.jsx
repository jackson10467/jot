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

export default class ShowJot extends Component {
  state = {
    jot: null,
    currentUser: null,
  };

  async componentDidMount() {
    if (this.props.categoryId != null && this.props.currentUser != null) {
      this.setCategory(this.props.currentUser.id, this.props.categoryId);
      this.readAllJots(this.props.currentUser.id, this.props.categoryId);
      this.setJot((this.props.currentUser.id, this.props.categoryId, this.props.jotId))
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    if (
      this.props.categoryId !== prevProps.categoryId &&
      this.props.categoryId != null &&
      this.props.currentUser != null &&
      this.props.currentUser !== prevProps.currentUser
    ) {
      this.setState({
        currentUser: this.props.currentUser
      });
      this.setJot((this.props.currentUser.id, this.props.categoryId, this.props.jotId))
    }
  }

  setJot = async (user_id, category_id, jotId) => {
    const category = await this.getOneJot(user_id, category_id, jotId)
    this.setState({ jot:jot });
  };


  render() {
    const { jots } = this.state;
    return (
      <div>
        <h2>Jot</h2>
        {
          <>

          </>
        }
      </div>
    );
  }
}
