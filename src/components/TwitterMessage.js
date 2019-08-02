import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      remainingLength: this.props.maxChars
    };
  }

  handleMessageChange = e => {
    this.setState({
      ...this.state,
      message: e.target.value,
      remainingLength: this.props.maxChars - e.target.value.length,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
          onChange={this.handleMessageChange} value={this.state.message} />
        <div> {this.state.remainingLength} remaining characters</div>
      </div>
    );
  }
}

export default TwitterMessage;
