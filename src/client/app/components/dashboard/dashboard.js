import React, { Component } from 'react';
import Header from './../header';
import NewProj from './newProj';

class Dashboard extends Component {
  render() {
    let projectArr = [];
    let noProjects = [];
    for (let i=0; i<this.props.allProjects.length; i++) {
      projectArr.push(<div id="projdisplay"><NewProj allProjects={this.props.allProjects[i]}/></div>);
    }
    if (projectArr.length < 1) {
      noProjects.push(<div id="no-new">No projects yet! <a href="#" onClick={ () => {this.props.changeView(3)} }>Create a project</a>.</div>)
    } else {
      noProjects = [];
    }
    return (
      <div>
        <Header changeView = {this.props.changeView}/>
        <section id="main">
          <div className="container">
            <div className="content">
              <h2>Projects</h2>
              {noProjects}
              <p className="no-projects">{projectArr}</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Dashboard;