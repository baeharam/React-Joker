import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import About from './about/About';
import Home from './home/Home';
import Trailer from './trailer/Trailer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/trailer" component={Trailer} />
          </Switch>
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
