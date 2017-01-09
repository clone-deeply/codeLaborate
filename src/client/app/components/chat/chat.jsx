import React, { Component } from 'react';
import Messages from './message.jsx';


class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      currentUser: this.props.username,
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
    this.messagePost = this.messagePost.bind(this);
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
  this.setState({currentMsg: state.currentMsg});
  console.log('currentMsg', state.currentMsg);
}

messagePost() {
  const state = {};
  state.messages = this.state.messages;
  state.messages.push({
    author: this.props.username,
    message: this.state.currentMsg,
  })
  this.setState({messages: state.messages})
  console.log(this.state.messages)
  this.refs.inputEntry.value="";
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
        username={this.props.username}
        messages={this.state.messages}
        />
        <input id="chat-input" ref="inputEntry" type="text" onChange={ (e) => {this.messageChange(e)}}></input>
        <button id="chat-button" onClick={this.messagePost}>SEND</button>
      </div>

    )
  }
}
}

export default Chat;
