import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
    // console.log(this.state.password)
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
    // console.log(this.state.username)
  }

  userLogin = (event) => {
    // debugger
    event.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0){
      this.props.handleLogin(this.state)
    } else {
      console.log("You can't log in")
    }
  }


  render() {
    return (
      <form onSubmit={this.userLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleUsername} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePassword} value={this.state.password}/>
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
