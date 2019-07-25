import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '', 
      maxTweet: 140 
    };
  }
  handleMessageChange = (event) => {
    const updatedTweet = this.state.maxTweet - 1
    this.setState({
      message: event.target.value,
      maxTweet: updatedTweet
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessageChange(event)} value={this.state.message}/>
        <h2> {this.state.maxTweet}</h2> 
      </div>
    );
  }
}

export default TwitterMessage;
