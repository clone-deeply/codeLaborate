import React, {Component} from 'react';
import {render} from 'react-dom';
import Radium from 'radium';

const Feature = (props) => {
  return (
    <div style={feature}>
      <span style={featureName}>
        <div style={name}>{ props.name }</div>
        <button style={btn}>ADD TASK</button>
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
}

const feature = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  minHeight: '150px',
  border: '1px solid #eaeaea',
  borderRadius: '3px',
  overflow: 'auto',
  marginBottom: '5px'
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