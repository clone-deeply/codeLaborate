import React, { Component } from 'react';
import Header from './../header.jsx';
import NewProj from './newProj.jsx';

class Dashboard extends Component {
  render() {
    let projectArr = [];
    let noProjects = [];
    for (let i=0; i<this.props.allProjects.length; i++) {
      projectArr.push(
        <NewProj
          deleteId={this.props.deleteId}
          id={this.props.allProjects[i].id}
          deleteProject={this.props.deleteProject}
          getProjects={this.props.getProjects}
          changeView={this.props.changeView}
          projectData={this.props.allProjects[i]}
          setActiveProject={this.props.setActiveProject}
          key={this.props.allProjects[i].id}
        />
      );
    }
    if (projectArr.length < 1) {
      noProjects.push(<div key="999" id="no-new">No projects yet!<a href="#" onClick={ () => {this.props.changeView(3)} }> Create a project</a>.</div>)
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
              <div style={styles}>
                {projectArr}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  width: '100%'
}

export default Dashboard;