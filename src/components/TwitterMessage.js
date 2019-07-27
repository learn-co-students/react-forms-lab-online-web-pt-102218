import React from "react";

export default class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      submittedChars: ''
    };
  }

  handleAddSubmittedChars = (event) => {
    this.setState({
      ...this.state.maxChar,
      submittedChars: event.target.value
    })
  };

  handleCharacterAmount = () => {
    let amount = this.state.maxChars - this.state.submittedChars.length
    return amount;
  };

  handleCharacterInput = (event) => {
    this.setState({
      submittedChars: event.target.value
    })
  
  };
    

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onInput={this.handleCharacterInput}  onChange={event => this.handleAddSubmittedChars(event)} value={this.state.submittedChars} />
        <text>{this.handleCharacterAmount()}</text>
      </div>
    );
  }
}
