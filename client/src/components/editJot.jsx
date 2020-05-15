import React, { Component } from 'react'
import { getOneJot } from '../services/APIhelper';

export default class EditJot extends Component {
  state = {
    jot: {
      title: "",
      note: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      jot: {
        ...this.state.jot,
        [name]: value
      }
    })
  }

  componentDidMount() {
    this.setFormData();
  }

  setFormData = async () => {
    if (this.props.currentUser) {
      const category = await getOneJot(this.props.currentUser.id, this.props.categoryId);
      this.setState({
        jot:category
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
        <h3>Update Jot Title:</h3>
        <input
          name="title"
          type="text"
          value={this.state.jot.title}
          onChange={this.handleChange}
        />
        <h3>Update Jot Title:</h3>
        <input
          name="note"
          type="text"
          value={this.state.jot.note}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
