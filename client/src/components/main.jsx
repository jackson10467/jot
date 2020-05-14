import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from './login';
import Register from './register';
import { getAllCategories, postCategory, putCategory, destroyCategory } from '../services/APIhelper';
// import ShowJots from './jots';
// import ShowJot from './jot'; these are for category.jsx
import ShowCategories from './categories';
import ShowCategory from './category';
import CreateCategory from './CreateCategory.jsx';
import UpdateCategory from './UpdateCategory.jsx';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      currentUser: null,
      logged: true
    }
  }

  async componentDidUpdate(prevProps) {
    console.log("hello")
    if ( this.props.currentUser!= null && this.props.currentUser !== prevProps.currentUser) {
      console.log("hello2")
      this.setState({
        currentUser: this.props.currentUser
      })
      this.readAllCatagories(this.props.currentUser.id);
    }
  }

  readAllCatagories = async (id) => {
    const getcategories = await getAllCategories(id);
    this.setState({ categories: getcategories })
  }


  handleCategorySubmit = async (id, categoryData) => {
    const newCategory = await postCategory(id, categoryData);
    this.setState(prevState => ({
      categories: [...prevState.categories, newCategory]
    }))
  }

  handleCategoryUpdate = async (id, categoryData) => {
    const updatedCategory = await putCategory(id, categoryData);
    this.setState(prevState => ({
      categories: prevState.categories.map(category => {
        return category.id === id ? updatedCategory : category
      })
    }))
  }

  handleCategoryDelete = async (id, category_id) => {
    await destroyCategory(id, category_id);
    this.setState(prevState => ({
      categories: prevState.categories.filter(category => {
        return category.id !== category_id
      })
    }))
  }


  render() {
    return (
      <main>
        <Route path='/login' render={(props) => (
          <Login
            {...props}
            handleLogin={this.props.handleLogin}
          />
        )} />
        <Route path='/register' render={(props) => (
          <Register
            {...props}
            handleRegister={this.props.handleRegister}
          />
        )} />
        <Route path='/categories' render={(props) => (
          <ShowCategories
            {...props}
            categories={this.state.categories}
            currentUser = {this.props.currentUser}
            handleCategoryDelete = {this.handleCategoryDelete}
          />
        )} />
        {/* <Route exact path='/categories/:id' render={(props) => {
          const { id } = props.match.params
          return <ShowCategory
            categoryId={id}
            categories={this.state.categories}
          />
        }} /> */}
        <Route path="/categories/new" render={(props) => (
          <CreateCategory
            {...props}
            currentUser = {this.props.currentUser}
            handleCategorySubmit={this.handleCategorySubmit}
          />
        )} />
        {/* <Route path='/categories/:id/edit' render={(props) => {
          const { id } = props.match.params
          return <UpdateCategory
            {...props}
            currentUser = {this.state.currentUser}
            handleCategoryUpdate={this.handleCategoryUpdate}
            categoryId={id}
          />
        }} /> */}
      </main>
    )
  }
}
