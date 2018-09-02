import React, { Component } from 'react';
import './skills.css';

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h1>{JSON.stringify(this.props.data)}</h1>
      </div>
    );
  }
}

export default Skills;
