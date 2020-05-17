import React, { Component } from 'react'

export default class CreateJot extends Component {
  state = {
    jot: {
      title: "",
      note: ""
    }
  }

  componentDidMount(){
    console.log("Mounted")
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


  render() {
    console.log("page loaded createJot")
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleJotSubmit(this.props.currentUser.id, this.props.categoryId, this.state.jot);
        this.props.history.push(`/categories/${this.props.categoryId}`);
      }}>
        <h3>Title:</h3>
        <input
          name="title"
          type="text"
          value={this.state.jot.title}
          onChange={this.handleChange}
        />
        <h3>Notes:</h3>
        
        <textarea
          name="note"
          rows="4"
          cols="50"
          type="text"
          value={this.state.jot.note}
          onChange={this.handleChange}
        />
        <button>Submit</button>

      </form>
    )
  }
}
