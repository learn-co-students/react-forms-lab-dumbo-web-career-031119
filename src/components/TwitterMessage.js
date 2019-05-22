import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }


  handleChange = (event)=>{
    this.setState({
      message: event.target.value,
      characters: this.props.maxChars - 1
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.message} onChange={this.handleChange} type="text" name="message" id="message" />
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
