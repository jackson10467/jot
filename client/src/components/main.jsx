import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./login";
import Register from "./register";
import {
  getAllCategories,
  postCategory,
  putCategory,
  destroyCategory,
  getOneCategory,
  getAllJots,
  getOneJot,
  postJot,
  putJot,
  destroyJot,
} from "../services/APIhelper";
import CreateJot from "./CreateJot";
// import ShowJots from './jots';
// import ShowJot from './jot'; these are for category.jsx
import ShowCategories from "./categories";
import ShowCategory from "./category";
import CreateCategory from "./CreateCategory.jsx";
import UpdateCategory from "./UpdateCategory.jsx";
import ShowJot from "./jot.jsx";
import EditJot from "./editJot.jsx";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      currentUser: null,
      logged: true,
    };
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.props.currentUser != null &&
      this.props.currentUser !== prevProps.currentUser
    ) {
      this.setState({
        currentUser: this.props.currentUser,
      });
      this.readAllCatagories(this.props.currentUser.id);
    }
  }

  readAllCatagories = async (id) => {
    const getcategories = await getAllCategories(id);
    this.setState({ categories: getcategories });
  };

  handleCategorySubmit = async (id, categoryData) => {
    const newCategory = await postCategory(id, categoryData);
    this.setState((prevState) => ({
      categories: [...prevState.categories, newCategory],
    }));
  };

  handleCategoryUpdate = async (user_id, category_id, categoryData) => {
    const updatedCategory = await putCategory(
      user_id,
      category_id,
      categoryData
    );
    this.readAllCatagories(this.props.currentUser.id);
  };

  handleCategoryDelete = async (id, category_id) => {
    await destroyCategory(id, category_id);
    this.setState((prevState) => ({
      categories: prevState.categories.filter((category) => {
        return category.id !== category_id;
      }),
    }));
  };
  handleJotSubmit = async (user_id, category_id, jotData) => {
    const newJot = await postJot(user_id, category_id, jotData);
    // this.setState((prevState) => ({
    //   jots: [...prevState.jots, newJot],
    // }));
  };

  handleJotUpdate = async (user_id, category_id, jotID, jotData) => {
    const updatedJot = await putJot(user_id, category_id, jotID, jotData);
    this.readAllJots(this.props.currentUser.id, this.props.categoryId);
  };



  render() {
    return (
      <main>
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} handleLogin={this.props.handleLogin} />
          )}
        />
        <Route
          path="/register"
          render={(props) => (
            <Register {...props} handleRegister={this.props.handleRegister} />
          )}
        />
        <Route
          exact path="/categories"
          render={(props) => (
            <ShowCategories
              {...props}
              categories={this.state.categories}
              currentUser={this.props.currentUser}
              handleCategoryDelete={this.handleCategoryDelete}
            />
          )}
        />
        <Switch>
        <Route
          exact path="/categories/new"
          render={(props) => (
            <CreateCategory
              {...props}
              currentUser={this.props.currentUser}
              handleCategorySubmit={this.handleCategorySubmit}
            />
          )}
        />
        <Route
          exact path="/categories/:id/"
          render={(props) => {
            const { id } = props.match.params;
            return (
              <ShowCategory
                categoryId={id}
                currentUser={this.props.currentUser}
              />
            );
          }}
        />
        </Switch>

        <Route
          exact path="/categories/:id/edit"
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
        />

        <Route
          exact path={`/categories/:id/jots/newJot`}
          render={(props) => {
            const { id } = props.match.params;
            return (
              <CreateJot
                {...props}
                categoryId={id}
                currentUser={this.props.currentUser}
                handleJotSubmit={this.handleJotSubmit}
              />
            );
          }}
        />

        {/* <Route
            path="/categories/:id/jots/:jotid"
            render={(props) => {
              const { id } = props.match.params;
              return (
                <ShowJot
                  {...props}
                  currentUser={this.state.currentUser}
                  handleCategoryUpdate={this.handleCategoryUpdate}
                  categoryId={id}
                />
              );
            }}
          /> */}
        <Route
            path="/categories/:id/jots/:jotid/edit"
            render={(props) => {
              const { id } = props.match.params;
              return (
                <EditJot
                  {...props}
                  currentUser={this.state.currentUser}
                  handleCategoryUpdate={this.handleJotUpdate}
                  categoryId={id}
                />
              );
            }}
          />
      </main>
    );
  }
}
