import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from './login';
import Register from './register';
import { getAllCategories, postCategory, putCategory, destroyCategory } from '../services/APIhelper';
// import ShowJots from './jots';
// import ShowJot from './jot'; these are for category.jsx
import ShowCategories from './categories';
import ShowCategory from './category';
import CreateCategory from './CreateCategory';
import UpdateCategory from './UpdateCategory';

export default class Main extends Component {
  state = {
    categories: [],
    currentUser: this.props.currentUser
  }

  componentDidMount() {
    if (this.state.currentUser) {
      this.readAllCatagories(this.state.currentUser.id);
    }
  }

  readAllCatagories = async (id) => {
    const categories = await getAllCategories(id);
    this.setState({ categories })
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
      categories: prevState.foods.map(category => {
        return category.id === id ? updatedCategory : category
      })
    }))
  }

  handleCategoryDelete = async (id) => {
    await destroyCategory(id);
    this.setState(prevState => ({
      categories: prevState.categories.filter(category => {
        return category.id !== id
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
          />
        )} />
        <Route exact path='/categories/:id' render={(props) => {
          const { id } = props.match.params
          return <ShowCategory
            categoryId={id}
            categories={this.state.categories}
          />
        }} />
        <Route path="/categories/new" render={(props) => (
          <CreateCategory
            {...props}
            currentUser = {this.state.currentUser}
            handleFoodSubmit={this.handleCategorySubmit}
          />
        )} />
        <Route path='/categories/:id/edit' render={(props) => {
          const { id } = props.match.params
          return <UpdateCategory
            {...props}
            currentUser = {this.state.currentUser}
            handleFoodUpdate={this.handleCategoryUpdate}
            categoryId={id}
          />
        }} />
      </main>
    )
  }
}
