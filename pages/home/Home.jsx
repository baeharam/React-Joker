import React from 'react';
import Main from './Main';
import Aside from './Aside';
import '../common/default.css';

class Home extends React.Component {
  render() {
    return (
      <>
        <Main />
        <Aside />
      </>
    );
  }
}

export default Home;