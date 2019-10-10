import React, { Component } from 'react';
import './Gallery.css';
import Lightbox from 'fslightbox-react';

class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
      slide: 0,
    }
  }

  showSlide = (slide) => {
    this.setState({
      isVisible: !this.state.isVisible,
      slide: slide,
    });
  };

  render() {
    return (
      <>
        <Lightbox 
          toggler={this.state.isVisible}
          slide={this.state.slide}
          sources={[1,2,3,4,5,6,7,8,9,10].map((num) => `../../assets/images/gallery${num}.jpg`)}
        />
        <section className="gallery">
          <ul className="l-row">
            {[1,2,3,4].map((num) => {
              return (
                <li key={num} className="l-col">
                  <div onClick={() => this.showSlide(num)} className={`gallery__item gallery__item--${num}`}></div>
                </li>
              );
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default Gallery;
