import React, { Component } from 'react';
import Radium from 'radium';

class NewProj extends Component {
  constructor(props) {
    super(props);
    this.showProject = this.showProject.bind(this);
  }

  showProject() {
    this.props.setActiveProject(this.props.projectData);
    this.props.changeView(4);
  }

  render() {
    return (
      <div style={styles}>
        <div style={title}>{this.props.projectData.title}</div>
        <div style={summary}>{this.props.projectData.summary}</div>
        <button key="333" style={button} onClick={this.showProject}>View Details</button>
      {/*
        <div id="proj-title">{this.props.projectData.title}</div>
        <div id="proj-summary">{this.props.projectData.summary}</div>
        <button id="proj-btn" onClick={this.showProject}>View Details</button>
      */}
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  flexWrap: 'flexWrap',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '4px',
  borderColor: '#eaeaea',
  margin: '10px',
  width: '168px',
  height: '168px',
  ':hover': {
    backgroundColor: 'rgba(170, 0, 255, .4)'
  }
}

const summary = {
  fontSize: '14px',
  padding: '4px',
  width: '150px',
  overflow: 'auto'
}

const title = {
  fontWeight: 'bold',
  width: '100%',
  height: '30px',
  textAlign: 'center',
  padding: '4px',
  backgroundColor: '#ebebeb',
  borderBottom: '1px',
  borderColor: '#eaeaea'
}

const button = {
  position: 'absolute',
  outline: 'none',
  backgroundColor: '#EAEAEA',
  border: 'none',
  bottom: '0',
  width: '100%',
  ':hover': {
    backgroundColor: "#AEAEAE"
  }
}

export default Radium(NewProj);