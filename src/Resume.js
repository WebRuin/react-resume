import React, { Component } from 'react';
import logo from './logo.svg';
import './Resume.css';
import Header from ./Header;
import Skills from ./Skills;


class Resume extends Component {
  componentWillMount() {
    // Get Data
    const data = fetch('./api/some.json')
      .then(
        function(response) {
          if (response.status !== 200) {
            return response;
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
    // END Get Data
  }
  render() {
    return (
      <div className="Resume">
      </div>
    );
  }
}

export default Resume;
