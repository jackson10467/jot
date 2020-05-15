import React, { Component } from 'react'
import { getOneCategory } from '../services/APIhelper';

export default class UpdateCategory extends Component {
  state = {
    category: {name: ""}
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      category:{name: value}
    })
  }

  componentDidMount() {
    this.setFormData();
  }

  setFormData = async () => {
    if (this.props.currentUser) {
      const category = await getOneCategory(this.props.currentUser.id, this.props.categoryId);
      this.setState({
        category:category
      })
    }
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleCategoryUpdate(this.props.currentUser.id, this.props.categoryId, this.state.category);
        this.props.history.push('/categories');
      }}>
        <h3>Update Category Name</h3>
        <input
          type="text"
          value={this.state.category.name}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
