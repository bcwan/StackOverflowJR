import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  errors() {
    return (
      <ul>
        {
          this.props.errors.map((error, idx) => (
            <li key={idx}>
              {error}
            </li>
          ))
        }
      </ul>
    )
  }

  render () {
    return (
      <div className="session-form-container">
        <h1>Please {this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.errors()}
          <label>Username: 
            <input type="text"
                   value={this.state.username}
                   onChange={this.update("username")}
            />
          </label>
          <br/>
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <br/>
          <button type="submit">{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;