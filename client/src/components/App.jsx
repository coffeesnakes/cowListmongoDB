import React from "react";
import { Fragment } from 'react';
import Header from './Header.jsx';
import List from './List.jsx';
import Form from './Form.jsx';
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
    };

    // bindings here
    this.getCows = this.getCows.bind(this);
    this.addCow = this.addCow.bind(this);
    this.deleteCow = this.deleteCow.bind(this);
    this.editCow = this.editCow.bind(this);
  }


  // mount initial database here
  componentDidMount() {
    this.getCows();
  }

  // axios get to set up the state of the cows data
  getCows() {
    axios
      .get("/cows")
      .then((res) => {
        const { data } = res;
        this.setState({ cows: data });
      })
      .catch((err) => console.log(err));
  }

  // axios post
  addCow(cow) {
    axios.post('/cows', cow)
    .then(this.getCows)
    .catch(console.log)
  }

  deleteCow(id) {
    axios.delete(`/cows/${id}`)
    .then(this.getCows)
    .catch(console.log)
  }

  editCow(id, name) {
    axios.put(`/cows/${id}`, name)
    .then(this.getCows)
    .catch(console.log)
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Form addCow={this.addCow} />
        <List
        cows={this.state.cows}
         deleteCow={this.deleteCow}
          editCow={this.editCow}
          />
      </Fragment>
    );
  }
}

export default App;
