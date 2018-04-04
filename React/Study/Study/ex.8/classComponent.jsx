import React, { Component } from 'react';

export default class ClassComponent extends Component {
  render() {
    console.log();
    return (
      <h1>{ this.props.value }</h1>  
    )
  }
}