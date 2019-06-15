import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange}
        type="text"
        name="message"
        id="message"
        value={this.state.message}/>
        <h4>
          Charaters Left {this.props.maxChars-this.state.message.length}
        </h4>
      </div>
    );
  }
}

export default TwitterMessage;
