import React, { Component } from 'react';
import Header from './../header.jsx';
import Feature from './feature.jsx';
import Radium from 'radium';
import axios from 'axios';

class ViewProject extends Component {
  constructor(props) {
    super(props);
    this.getFeatures();
    this.addFeature = this.addFeature.bind(this);
    this.state = {
      features: [],
    };
  }

  getFeatures() {
    axios.get('/features')
    .then((response) =>{
      let newArray = [];
      for(let i=0; i< response.data.length; i++) {
        newArray.push(response.data[i].featureName);
      }
      this.setState({features: newArray});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  addFeature(e) {
    let newState;
    if(e.key === 'Enter') {
      e.preventDefault();
      newState = this.state.features;
      newState.push(e.target.value)
      this.setState({ features: newState });

      axios.post('/addFeature', {
        featureName: e.target.value,
      }).then((res) => {
        // GET FEATURES
      }).catch((error) => {
        console.log(error);
      })

      this.props.getFeatures();

      e.target.value = '';
    }
  }

  render() {
    const features = []
    this.state.features.forEach((feature, i) => {
      features.push(<Feature name={feature} key={i}/>);
    });
    return (
      <div>
        <Header changeView = {this.props.changeView}/>
        <section id="main">
            <div className="container">
              <div className="content">
                <h3 className="heading" style={heading}><span style={purple}>{this.props.projectData.title}</span>: Project Overview</h3>
                <div className="project-row clearfix" style={overview}>
                  <div className="team one-third" style={oneThird}>
                    <h3>Team Members</h3>
                    <p>Anto, Chris, Jimmy</p>
                  </div>
                  <div className="project-date one-third" style={oneThird}>
                    <h3>Project Date</h3>
                    <p>01/05/2017</p>
                  </div>
                  <div className="project-status one-third" style={oneThird}>
                    <h3>Tasks Completed</h3>
                    <p>0 of 0 (0%)</p>
                  </div>
                </div>
                <div className="project-row clearfix" style={overview}>
                  <div id="project-summary" style={summary}>
                    <h3>Project Summary</h3>
                    <p>{this.props.projectData.summary}</p>
                  </div>
                </div>
                {/*
                  <div id="tasks">
                    <h3 className="heading">Project Tasks</h3>
                    <p>No tasks are currently assigned. <a href="#" onClick={ () => {this.props.changeView(5)}}>Create task</a></p>
                  </div>
                */}
                {/*-----------------------------HEADERS--------------------------------*/}
                <div style={featureContainer}>
                  <div style={headers}>
                    <span style={stage}>Feature</span>
                    <span style={stage}>To-do</span>
                    <span style={stage}>Working On It...</span>
                    <span style={stage}>Completed</span>
                  </div>
                  {/*-----------------------------FEATURES--------------------------------*/}
                  {features}
                </div>  
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

const featureContainer = {
  width: '100%',
  borderTopRightRadius: '4px',
  borderTopLeftRadius: '4px',
  borderColor: '#eaeaea',
  borderStyle: 'solid',
  borderWidth: '1px',
  margin: '20px 0',
}

const purple = {
  color: "#AA00FF"
}

const heading = {
  margin: '0 0 5px 0',
}

const overview = {
  width: '100%',
  maxHeight: '150px',
  display: 'flex',
  flexDirection: 'row'
}

const summary = {
  width: '100%'
}

const oneThird = {
  flexGrow: 1,
  maxHeight: '100%'
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
  height: '40px',
  width: '100%',
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
  backgroundColor: 'white',
  border: 'none',
  color: '#eaeaea',
  fontSize: '1.5em',
  userSelect: 'none',
  ':hover': {
    color: 'rgba(0, 255, 0, .8)',
    cursor: 'pointer'
  }
}

export default Radium(ViewProject);
