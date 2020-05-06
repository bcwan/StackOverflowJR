import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }


  //deletes errors if user shifts to another page/link
  componentWillUnmount() {
    this.props.deleteErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.props.history.push('./'));
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.demoProcessForm({ username: "demo", password: "123456" })
      .then(() => this.props.history.push('./'));
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  errors() {
    return (
      <div>
        {
          this.props.errors.map((error, idx) => (
              <p className="error-li" key={idx}>
                {error}
              </p>
          ))
        }
      </div>
    )
  }

  render () {
    return (
      
      <Jumbotron>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <h1>Please {this.props.formType}</h1>
          {this.errors()}
          <label>Username</label>
            <input type="text"
                   className="input-bar"
                   value={this.state.username}
                   onChange={this.update("username")}
            />
          <br/>
          <label>Password</label>
            <input type="password"
              className="input-bar"
              value={this.state.password}
              onChange={this.update("password")}
            />
          <br/>
          <Button variant="primary" type="submit">{this.props.formType}</Button>
          <Button variant="success" onClick={this.handleDemoLogin}>Demo Account</Button>
        </form>
      </Jumbotron>
    )
  }
}

export default SessionForm;