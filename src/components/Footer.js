// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const today = new Date();

const Footer = props => (
  <div id="footer" className="sticky-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-sm-6">
          <img
            className="footer-logo"
            src="images/logo.png"
            alt="Park Detective"
          />
          <br />
          <br />
          <p>
            Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
            libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies
            laoreet ullamcorper phasellus semper.
          </p>
        </div>

        <div className="col-md-4 col-sm-6">
          <h4>Helpful Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/parks">Parks</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="col-md-3 col-sm-12">
          <h4>Contact Us</h4>
          <div className="text-widget">
            <span>12345 Little Lonsdale St, Melbourne</span> <br />
            Phone: <span>(123) 123-456 </span>
            <br />
            E-Mail:<span>
              {' '}
              <a href="#">office@example.com</a>{' '}
            </span>
            <br />
          </div>
          <ul className="social-icons margin-top-20">
            <li>
              <a className="facebook" href="">
                <i className="icon-facebook" />
              </a>
            </li>
            <li>
              <a className="twitter" href="">
                <i className="icon-twitter" />
              </a>
            </li>
            <li>
              <a className="gplus" href="">
                <i className="icon-gplus" />
              </a>
            </li>
            <li>
              <a className="vimeo" href="">
                <i className="icon-vimeo" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="copyrights">
            © {today.getFullYear()} Park Detective. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
