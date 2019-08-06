import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {Message:''};
  }

  onType=(e)=>{
    
    this.setState({Message:e.target.value})
  }

  render() {
    
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.onType} value={this.state.Message} />
        <strong>{this.props.maxChars-this.state.Message.length}/{this.props.maxChars}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
