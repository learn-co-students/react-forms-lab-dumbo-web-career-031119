import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  userLogin = (input) => {
    if (input.target.id === 'username'){
      this.setState({
        username: input.target.value
      })
    }
    else if (input.target.id === 'password'){
      this.setState({
        password: input.target.value
      })
    }
  }

  loginSubmit = (event) => {
    event.preventDefault()
    // event.persist()
    if (this.state.username && this.state.password){
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.loginSubmit}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
              value={this.state.username} 
              onChange={this.userLogin}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={this.state.password} 
              onChange={this.userLogin}
            />
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
