// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => (
  <div>
    <header id="header-container">
      <div id="header">
        <div className="container">
          {/* Left Side Content */}
          <div className="left-side">
            <div id="logo">
              <NavLink exact to="/" activeClassName="current">
                <img src="/images/logo.png" alt="" />
              </NavLink>
            </div>
            {/* Mobile Navigation */}
            <div className="mmenu-trigger">
              <button className="hamburger hamburger--collapse" type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
            {/* Main Navigation */}
            <nav id="navigation" className="style-1">
              <ul id="responsive">
                <li>
                  <NavLink exact to="/" activeClassName="current">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/parks" activeClassName="current">
                    Parks
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="clearfix" />
            {/* Main Navigation / End */}
          </div>
        </div>
      </div>
    </header>
    <div className="clearfix" />
  </div>
);

export default Header;
