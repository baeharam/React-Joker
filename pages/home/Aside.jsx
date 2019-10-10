import React, { Component } from 'react';
import './Aside.css';

class Aside extends Component {
  render() {
    return (
      <>
        <aside>
          <div className="l-wrapper">
            <div className="aside__inside clearfix">
              <nav>
              <ul className="clearfix">
                <li>
                  <a target="_blank" href="https://www.instagram.com/jokermovie/">
                    <img src="../../assets/images/instagram.png" alt="instagram" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/jokermovie/">
                    <img src="../../assets/images/twitter.png" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.facebook.com/jokermovie/">
                    <img src="../../assets/images/facebook.png" alt="facebook" />
                  </a>
                </li>
              </ul>
              </nav>
            </div>
          </div>
        </aside>
      </>
    );
  }
}

export default Aside;
