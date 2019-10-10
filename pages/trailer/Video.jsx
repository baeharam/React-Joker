import React, { Component } from 'react';
import './Video.css';

class Video extends Component {
  render() {
    return (
      <>
        <section className="trailer">
          <div className="trailer__video-wrapper previous">
            <h2 className="trailer__title">Korean trailer</h2>
            <video className="trailer__video" poster="../images/trailer-korean.jpg">
              <source src="https://firebasestorage.googleapis.com/v0/b/joker-d3735.appspot.com/o/trailer3.mp4?alt=media&token=e13e4f36-d773-4c35-ae60-597117002bed"
                type="video/mp4" />
            </video>
            <img className="trailer__play" src="../images/play.png" alt="재생" />
          </div>
          <div className="trailer__video-wrapper">
            <h2 className="trailer__title">Teaser trailer</h2>
            <video className="trailer__video" poster="../images/trailer-teaser.jpg">
              <source src="https://firebasestorage.googleapis.com/v0/b/joker-d3735.appspot.com/o/trailer2.mp4?alt=media&token=260876e2-c9d8-440f-92fe-be1620ebd089"
                    type="video/mp4" />
            </video>
            <img className="trailer__play" src="../images/play.png" alt="재생" />
          </div>
          <div className="trailer__video-wrapper next">
            <h2 className="trailer__title">Final trailer</h2>
              <video className="trailer__video" poster="../images/trailer-final.jpg">
                <source src="https://firebasestorage.googleapis.com/v0/b/joker-d3735.appspot.com/o/trailer1.mp4?alt=media&token=51e59456-5e99-44f4-8cd2-25ebfd51157e"
                    type="video/mp4" />
              </video>
              <img className="trailer__play" src="../images/play.png" alt="재생" />
          </div>
        </section>
      </>
    );
  }
}

export default Video;