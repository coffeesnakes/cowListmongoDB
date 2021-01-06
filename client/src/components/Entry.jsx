import React from "react";
import { Component } from 'react';

class Entry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      newName: "",
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleDelete() {
    this.props.deleteCow(this.props.cow.id);
  }

  handleEdit() {
    if (this.state.editing) {
      let cowName = { name: this.state.newName };
      this.props.editCow(this.props.cow.id, cowName);
      this.setState({ newName: "" });
    }
    this.setState({ editing: !this.state.editing });
  }

  handleInput(e) {
    const value = e.target.value;
    this.setState({ newName: value });
  }

  render() {
    const { name, description } = this.props.cow;
    return (
      <li>
        <span>
          {name} <br />{" "}
        </span>
        {this.state.editing ? (
          <input
            type="form"
            value={this.state.newName}
            onChange={this.handleInput}
          />
        ) : (
          ""
        )}
        <span> {description} <br/> </span>
        <button onClick={this.handleEdit}>
          {this.state.editing ? "submit" : "edit"}
        </button>
        <button onClick={this.handleDelete}>Delete</button>
        <br />
        <br />
      </li>
    );
  }
}

export default Entry;
