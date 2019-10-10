import React from 'react';
import Video from './Video';
import '../common/default.css';

class Home extends React.Component {
  render() {
    return (
      <>
        <main className="main-trailer">
          <div className="l-wrapper">
            <Video />
          </div>
        </main>
      </>
    );
  }
}

export default Home;