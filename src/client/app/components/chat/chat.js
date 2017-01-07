import React, { Component } from 'react';
import Messages from './message.js';


class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    }

  }
render() {
  if(this.state.page === 0) {
    return(
      <div id="chat-bubble"></div>
    )
  }
  if(this.state.page === 1) {

    return(
      // let array = [];
      // for(let i = 0; i < this.state.messages.length; i += 1) {
      //   array.push(<Messages id={i} />)
      // }

      <div id="chat-window">
        {array}

        <input type="text"></input>
      </div>

    )
  }
}
}

export default Chat;
