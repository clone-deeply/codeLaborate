import React, { Component } from 'react';
import Messages from './message.jsx';


class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      currentMsg: '',
      messages: [
        {author: "Jimmy",
        message: "This is Jimmy!",
      },
      {author: "Chris",
      message: "This is Chris!",
      }
      ],
    }
    this.bubbleChange = this.bubbleChange.bind(this);
    this.messageChange = this.messageChange.bind(this);
  }

bubbleChange() {
  const state = {};
  if(this.state.page === 1) {
    state.page = 0;
    this.setState({page: state.page});
  }
  state.page = 1;
  this.setState({page: state.page});
}

messageChange(e) {
  const state = {};
  state.currentMsg = e.target.value;
  this.setState(state);
}

render() {
  if(this.state.page === 0) {
    return(
      <div id="chat-bubble" onClick={this.bubbleChange}></div>
    )
  }
  if(this.state.page === 1) {

    return(
      // let array = [];
      // for(let i = 0; i < this.state.messages.length; i += 1) {
      //   array.push(<Messages id={i} />)
      // }

      <div id="chat-window">
        <Messages
        messages={this.state.messages}
        />
        <input id="chat-input" type="text"></input>
        <button id="chat-button">SEND</button>
      </div>

    )
  }
}
}

export default Chat;
