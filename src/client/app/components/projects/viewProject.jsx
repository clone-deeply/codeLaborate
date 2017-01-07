import React, { Component } from 'react';
import Header from './../header.jsx';
import Feature from './feature.jsx';
import Radium from 'radium';

class ViewProject extends Component {
  constructor(props) {
    super(props);
    this.addFeature = this.addFeature.bind(this);
    this.addTask = this.addTask.bind(this);
    this.state = {
      features: [],
    };
  }

  addFeature(e) {
    let newState;
    if(e.key === 'Enter') {
      e.preventDefault();
      newState = this.state.features;
      newState.push(e.target.value)
      this.setState({ features: newState });
      console.log(this.state);
      e.target.value = '';
    }
  }

  addTask() {
    
  }

  render() {
    const features = []
    this.state.features.forEach((feature, i) => {
      features.push(<Feature name={feature} addTask={this.addTask} key={i}/>);
    });
    return (
      <div>
        <Header changeView = {this.props.changeView}/>
        <section id="main">
            <div className="container">
              <div className="content">
                <h2>Codesmith Senior Project</h2>
                <h3 className="heading">Project Overview</h3>
                <div className="project-row clearfix">
                  <div className="team one-third">
                    <h3>Team Members</h3>
                    <p>Brian, Jon, Max, Mike</p>
                  </div>
                  <div className="project-date one-third">
                    <h3>Project Date</h3>
                    <p>01/05/2017</p>
                  </div>
                  <div className="project-status one-third">
                    <h3>Tasks Completed</h3>
                    <p>0 of 0 (0%)</p>
                  </div>
                </div>
                <div className="project-row clearfix">
                  <div id="project-summary">
                    <h3>Project Summary</h3>
                    <p>Create an app that everyone loves and no one complains about on hacker news.</p>
                  </div>
                </div>
                {/*
                  <div id="tasks">
                    <h3 className="heading">Project Tasks</h3>
                    <p>No tasks are currently assigned. <a href="#" onClick={ () => {this.props.changeView(5)}}>Create task</a></p>
                  </div>
                */}
                {/*-----------------------------HEADERS--------------------------------*/}
                <div style={headers}>
                  <span style={stage}>Feature</span>
                  <span style={stage}>To-do</span>
                  <span style={stage}>Working On It...</span>
                  <span style={stage}>Completed</span>
                </div>
                {/*-----------------------------FEATURES--------------------------------*/}
                {features}
                {/*-----------------------------BUTTON--------------------------------*/}
                <form style={btnInput} type="submit">
                  <button style={btn}>+</button>
                  <input onKeyPress={this.addFeature} style={input} type="text" placeholder="Enter Feature Name"></input>
                </form>
              </div>
            </div>
        </section>
      </div>
    )
  }
}

const btnInput = {
  display: 'flex',
  alignItems: 'center',
}

const input = {
  height: '25px',
  width: '150px',
  padding: '0 5px',
}

const headers = {
  backgroundColor: '#fafafa',
  borderRadius: '4px',
  height: '60px',
  width: '100%',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#eaeaea',
  margin: '15px 0',
  display: 'flex',
  alignItems: 'center',
}

const stage = {
  fontWeight: 'bold',
  display: 'inline-block',
  width: '25%',
  textAlign: 'center'
}

const btn = {
  outline: 0,
  display: 'inline-block',
  background: '#FFF',
  color: '#EEE',
  borderRadius: '50%',
  borderStyle: 'solid',
  borderColor: '#EEE',
  borderWidth: '1px',
  textAlign: 'center',
  height: '25px',
  width: '25px',
  fontSize: '16px',
  fontFamily: 'Open-Sans, sans-serif',
  margin: '0 5px',
  ':hover': {
    color: '#AA00FF',
    borderColor: '#AA00FF'
  },
  ':focus': {
    backgroundColor: '#FFF',
  },
  ':active': {
    backgroundColor: '#AA00FF',
    color: 'white',
    borderColor: '#EEE',
  },
  ':visisted': {
    backgroundColor: '#EEE',
    color: 'white',
    borderColor: '#EEE',
  }
}

export default Radium(ViewProject);
