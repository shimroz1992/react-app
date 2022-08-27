import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Button } from 'react-lightning-design-system';
export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeFName = this.onChangeFName.bind(this);
    this.onChangeLName = this.onChangeLName.bind(this);
    this.onChangeUname = this.onChangeUname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      title: "",
      first_name: "",
      last_name: "",
      user_name: "",
      description: "", 
      published: false,

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeFName(e) {
    this.setState({
      first_name: e.target.value
    });
  }

  onChangeLName(e) {
    this.setState({
      last_name: e.target.value
    });
  }
  
  onChangeUname(e) {
    this.setState({
      user_name: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      email: this.state.title,
      password: this.state.description,
      password_confirmation: this.state.description,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      user_name: this.state.user_name
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.email,
          description: response.data.password,
          published: response.data.user_name,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (

      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">email</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">password</label>
              <input
                type="password"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>


            <div className="form-group">
              <label htmlFor="title">First Name</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                required
                value={this.state.first_name}
                onChange={this.onChangeFName}
                name="first_name"
              />
            </div>


            <div className="form-group">
              <label htmlFor="title">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                required
                value={this.state.last_name}
                onChange={this.onChangeLName}
                name="last_name"
              />
            </div>


            <div className="form-group">
              <label htmlFor="title">User Name</label>
              <input
                type="text"
                className="form-control"
                id="user_name"
                required
                value={this.state.user_name}
                onChange={this.onChangeUname}
                name="user_name"
              />
            </div>

            <Button onClick={ this.saveTutorial } className="btn btn-success">Add user</Button>



          </div>
        )}
      </div>
    );
  }
}
