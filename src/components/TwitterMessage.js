import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      maxLength: this.props.maxChars,
      message: ""
    };
  }

  messageUpdate = (event) => {
    this.setState({
      message: event.target.value
    })

  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.messageUpdate} value={this.state.message}/>
        <h4>Remaining Characters: {this.state.maxLength-this.state.message.length} </h4>
      </div>
    );
  }
}

export default TwitterMessage;
