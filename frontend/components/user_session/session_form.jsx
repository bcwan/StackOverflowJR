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
  }

  
  //deletes errors if user shifts to another page/link
  componentWillUnmount() {
    this.props.deleteErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.props.history.push('./profile'));
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  errors() {
    return (
      <ul>
        {
          this.props.errors.map((error, idx) => (
            <li className="error-li" key={idx}>
              {error}
            </li>
          ))
        }
      </ul>
    )
  }

  render () {
    return (
      
      <Jumbotron>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <h1>Please {this.props.formType}</h1>
          {this.errors()}
          <label>Username: 
            <input type="text"
                   className="input-bar"
                   value={this.state.username}
                   onChange={this.update("username")}
            />
          </label>
          <br/>
          <label>Password:
            <input type="password"
              className="input-bar"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <br/>
          <Button variant="primary" type="submit">{this.props.formType}</Button>
        </form>
      </Jumbotron>
    )
  }
}

export default SessionForm;