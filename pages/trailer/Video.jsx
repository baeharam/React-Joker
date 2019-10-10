import React, { Component } from 'react';
import './Video.css';

class Video extends Component {
  constructor(props){
    super(props);
    this.wrapperRefs = [...Array(3)].map(() => React.createRef());
    this.videoRefs = [...Array(3)].map(() => React.createRef());
  }

  type = [' previous','',' next'];
  title = ['Korean','Teaser','Final']
  poster = ['koeran','teaser','final'];
  baseUrl = 'https://firebasestorage.googleapis.com/v0/b/joker-d3735.appspot.com/o/trailer';
  source = [
    '3.mp4?alt=media&token=e13e4f36-d773-4c35-ae60-597117002bed',
    '2.mp4?alt=media&token=260876e2-c9d8-440f-92fe-be1620ebd089',
    '1.mp4?alt=media&token=51e59456-5e99-44f4-8cd2-25ebfd51157e'
  ];

  onPlayClick = (index) => {
    this.wrapperRefs[index].current.classList.add('playing');
    this.videoRefs[index].current.play();
  };

  onVideoClick = (index) => {
    this.wrapperRefs[index].current.classList.remove('playing');
    this.videoRefs[index].current.pause();
  };

  render() {
    return (
      <>
        <section className="trailer">
        {
          this.type.map((type,index) => {
            return (<div key={type + index} ref={this.wrapperRefs[index]} className={`trailer__wrapper${type}`}>
              <h2 className="trailer__title">{this.title[index]} trailer</h2>
              <video 
                onClick={() => this.onVideoClick(index)} 
                ref={this.videoRefs[index]} 
                className="trailer__video" 
                poster={`../../assets/images/trailer-${this.poster[index]}.jpg`}
                preload>
                <source src={`${this.baseUrl}${this.source[index]}`} type="video/mp4" />
              </video>
              <img onClick={() => this.onPlayClick(index)} className="trailer__play" src="../../assets/images/play.png" alt="재생" />
            </div>);
          })
        }
        </section>
      </>
    );
  }
}

export default Video;