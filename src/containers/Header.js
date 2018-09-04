import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel);

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="left">
          <h1>{this.props.data.name}</h1>
          <p>{this.props.data.tag}</p>
        </div>
        <div className="right">
          <h2>{this.props.data.t1}</h2>
          <h3>{this.props.data.t2}</h3>
        </div>
        <div className="header-contact">
          <a rel="noopener" href="tel:+14156943568"><FontAwesomeIcon icon="phone" /> {this.props.data.phone}</a>
          <a rel="noopener" href="mailto:tim.smith.hdg@gmail.com"><FontAwesomeIcon icon="at" /> {this.props.data.email}</a>
        </div>
        <nav id="nav" className='nav'>
          <ul>
            {
              // this.props.data.nav.map(i => `<li><a href="#${i}">${i}</a></li>`)
            }
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
