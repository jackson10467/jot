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
    console.log(this.props.jotId)
  }

  setFormData = async () => {
    if (this.props.currentUser) {
      const category = await getOneJot(this.props.currentUser.id, this.props.categoryId, this.props.jotId);
      this.setState({
        jot:category
      })
    }
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleJotUpdate(this.props.currentUser.id, this.props.categoryId, this.props.jotId,this.state.jot);
        this.props.history.push(`/categories/${this.props.categoryId}/jots/${this.props.jotId}`);
      }}>
        <h3>Update Jot Title:</h3>
        <input
          name="title"
          type="text"
          value={this.state.jot.title}
          onChange={this.handleChange}
        />
        <h3>Update Jot Note:</h3>
        <textarea
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
