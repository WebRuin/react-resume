import React, { Component } from 'react';
import './Resume.css';
import axios from 'axios';
import Header from './Header';
import Skills from './Skills';
import data from './data.json';


class Resume extends Component {
  constructor(props) {
    super();
    this.state = { header: {}, skills: {} }
  }
  componentDidMount() {
    this.setState({
        ...data
    });
  }
  render() {
    return (
      <div className="Resume">
        <Header data={this.state.header} />
        <Skills data={this.state.skills} />
      </div>
    );
  }
}

export default Resume;
