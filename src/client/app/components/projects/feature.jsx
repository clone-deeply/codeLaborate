import React, {Component} from 'react';
import {render} from 'react-dom';
import Radium from 'radium';

const Feature = (props) => {
  return (
    <div style={feature}>
      <div key="x" style={x}>+</div>
      <span style={featureName}>
        <div style={name}>{ props.name }</div>
        <button key="addTask" style={btn}>ADD TASK</button>
      </span>
      <span style={grey}></span>
      <span style={white}></span>
      <span style={grey}></span>
    </div>
  );
};

const btn = {
  borderStyle: 'none',
  backgroundColor: '#EFEFEF',
  borderColor: '#eaeaea',
  outline: 'none',
  ':hover': {
    backgroundColor: 'rgba(170, 0, 255, .4)',
    color: 'white',
  }
}
const x = {
  color: '#eaeaea',
  fontSize: '2em',
  position: 'absolute',
  marginLeft: '-30px',
  userSelect: 'none',
  transform: 'rotate(45deg)',
  ':hover': {
    color: 'red',
    cursor: 'pointer'
  }
}

const featureName = {
  display: 'inline-block',
  backgroundColor: '#FFF',
  minHeight: '150px',
  width: '25%',
  padding: '10px',
}

const name = {
  fontSize: '24px',
  fontWeight: 'bold',
  maxWidth: '230px',
  overflow: 'hidden',
}

const feature = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  minHeight: '150px',
  borderTop: '1px solid #eaeaea',
  width: '100%',
  position: 'relative',
}

const white = {
  display: 'inline-block',
  backgroundColor: '#FFF',
  minHeight: '150px',
  width: '25%'
}

const grey = {
  display: 'inline-block',
  backgroundColor: 'rgba(243, 229, 245, .3)',
  minHeight: '150px',
  width: '25%',
}

export default Radium(Feature);