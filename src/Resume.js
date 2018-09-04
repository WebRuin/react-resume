import React, { Component } from 'react';
import './colors.scss';
import './Resume.scss';
import Header from './containers/Header';
import Skills from './containers/Skills';
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
      <div className="resume">
        <Header data={this.state.header} />
        <Skills data={this.state.skills} />
      </div>
    );
  }
}

export default Resume;
