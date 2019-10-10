import React, { Component } from 'react';
import './About.css';
import '../common/default.css';
import Intro from './Intro';
import Gallery from './Gallery';
import Synopsis from './Synopsis';

class About extends Component {
  constructor(props){
    super(props);
    this.mainRef = React.createRef();
  }

  render() {
    return (
      <>
        <main ref={this.mainRef} className="main-about">
          <div className="l-wrapper">
            <Intro mainRef={this.mainRef} />
            <Gallery />
          </div>
          <Synopsis mainRef={this.mainRef} />
        </main>
      </>
    );
  }
}

export default About;
