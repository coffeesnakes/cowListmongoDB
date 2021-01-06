import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
    // bindings for form
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleInput(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
        [name]: value
      });
    }

    handleSubmit(e) {
      // only triggers submit on explicit clicking of submit, not on each input
      e.preventDefault();
      this.props.addCow(this.state);

      this.setState({
        name: '',
        description: ''
      })
    }


  render() {
    return (
      <form>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          size="13"
          value={this.state.name}
          onChange={this.handleInput}
        />
        <label htmlFor="description">Description: </label>
        <input
          id="description"
          name="description"
          size="13"
          value={this.state.description}
          onChange={this.handleInput}
        />
        <button onClick={this.handleSubmit}>ADD COW</button>
      </form>
    );
  }
}

export default Form;
