import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="l-wrapper">
            <div className="footer__inside">
              <p>
                JOKER and all related characters and elements © & ™ DC Comics.
                © Warner Bros. Entertainment Inc.
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;