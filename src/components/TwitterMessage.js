import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputVal: ''
    };
  }

  limitChange = (event) => {
    if ( event.target.value.length <= this.props.maxChars ) {
      this.setState({
        inputVal: event.target.value
      })
    } 
  }

  remainingCharacters = () => {
    return this.props.maxChars - this.state.inputVal.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.limitChange} value={this.state.inputVal} />
        <br />
        <span>Remaining Characters: {this.remainingCharacters()}</span>
      </div>
    );
  }
}

export default TwitterMessage;
