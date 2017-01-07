import React, { Component } from 'react';



class NewProj extends Component {
  render() {
    return (
      <div>
        <div id="proj-title">{this.props.allProjects.title}</div>
        <div id="proj-summary">{this.props.allProjects.summary}</div>
        <button id="proj-btn">View Details</button>
      </div>
    )
  }
}

export default NewProj;