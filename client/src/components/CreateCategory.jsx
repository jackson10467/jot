import React, { Component } from 'react'

export default class CreateCategory extends Component {
  state = {
    category: { name: "" }
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      category: { name: value }
    })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleCategorySubmit(this.props.currentUser.id, this.state.category);
        this.props.history.push('/categories');
      }}>
        <h3>Category Name:</h3>
        <input
          type="text"
          value={this.state.category.name}
          // value={copy.name}
          onChange={this.handleChange}
        />
        <button>Submit</button>

      </form>
    )
  }
}
