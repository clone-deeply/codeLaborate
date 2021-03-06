import React, { Component } from 'react';
import Header from './../header.jsx';
import axios from 'axios';
import Radium from 'radium';
let cssClasses = `form-row clearfix`;

class AddProj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      title: '',
      team: [],
      summary: '',
    }
  }

  render() {
    return (
      <div>
        <Header changeView={this.props.changeView}/>
        <section id="main">
          <div className="container">
            <div className="content">
              <h2>Create Project</h2>
              <div id="create-project">
                <div className="form-row clearfix">
                  <div className="input-half project-title">

                    <label>Project Title</label>
                    <input
                      type="text"
                      id="project-name"
                      name="project-name"
                      onChange={(e) => {this.props.projChange(e)}} 
                    />
                  </div>
                  <div className="input-half project-select">
                    <label>Add Team Members</label>
                  
                    <select style={select} id="team-select" multiple> 
                      <option value="Anto">Anto</option>
                      <option value="Jimmy">Jimmy</option>
                      <option value="Chris">Chris</option>
                    </select>
                   

                  </div>
                </div>
                <div className="input-full project-summary">
                  <label>Summarize Your Project</label>

                  <textarea
                    id="project-summary"
                    id="project-summary"
                    onChange={(e) => {this.props.projSummaryChange(e)}} >
                  </textarea>
                </div>
                <div className="clearfix">
                  <button type="submit" id="project-submit" onClick={ () => {this.props.createProject()} }>Save Project</button><a href="#" className="reset-project">Reset Project</a>

                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    )
  }
}

const select = {
  borderRadius: '4px',
  borderColor: '#eaeaea',
  borderStyle: 'solid',
  borderWidth: '1px',
  width: '100%'
}

export default Radium(AddProj);