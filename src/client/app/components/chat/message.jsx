import React, {Component} from 'react';

class Messages extends Component {

  render() {
    let messages = [];
    for(let i = 0; i < this.props.messages.length; i += 1) {
    messages.push(<div class="messages" key={i}>{this.props.messages[i].author}: {this.props.messages[i].message}</div>)
    }
    return(
      <div id="messages">{messages}</div>
    )
  }



}

export default Messages;
