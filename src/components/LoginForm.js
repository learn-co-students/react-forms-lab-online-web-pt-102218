import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username : "", password : ""};
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value,
    });
  }

  handleSubmit(event){
    event.preventDefault()
    if (this.state.username == "" || this.state.password == ""){

    }else{
      this.props.handleLogin(this.state)
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.value} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
