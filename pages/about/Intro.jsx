import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {

  onOverlay = () => {
    this.props.mainRef.current.classList.add('overlay');
  };

  render() {
    return (
      <>
        <section className="intro">
          <div className="intro__component intro__director">
            <h2>Director</h2>
            <p>Todd Phillips</p>
          </div>
          <div className="intro__component intro__date">
            <h2>Released Date</h2>
            <p>2 October 2019</p>
          </div>
          <div className="intro__component intro__actor">
            <h2>Actors</h2>
            <p>Joaquin Phoenix, Robert De Niro, Zazie Beetz</p>
          </div>
          <div className="intro__component intro__synopsis">
            <h2>Synopsis</h2>
            <p>
              Gotham City, 1981
              Arthur Fleck (Joaquin Phoenix) works as a clown-for-hire for a company called Ha-Ha's.
              He is tasked with advertising a store by dancing and waving a sign around.
              The sign gets snatched by a group of punk teens, forcing Arthur to chase them
              into an alley. They smash the sign against his face and proceed to mercilessly
              kick him while he's down. In this era, Gotham is struggling with crime,
              unemployment, and poverty. Arthur visits a social...
            <span onClick={this.onOverlay} className="intro__synopsis__more">more</span>
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default Intro;
