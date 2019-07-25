import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }
  handleUsername = (event) => {
    this.setState({
    username: event.target.value 
    })
  }
  handleFormPassword = (event) => {
    this.setState({
    password: event.target.value 
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return 
      this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleFormPassword} />
          </label>
        </div>
        <div>
          <button type="submit" value="Submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
