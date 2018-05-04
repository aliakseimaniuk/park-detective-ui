// @flow

import React from 'react';

class PopularCategories extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="headline centered margin-top-75">
                Popular Categories
                <span>
                  Browse <i>the most desirable</i> categories
                </span>
              </h3>
            </div>
          </div>
        </div>

        {/* Categories Carousel */}
        <div className="fullwidth-carousel-container margin-top-25">
          <div className="fullwidth-slick-carousel category-carousel">
            {/* Item */}
            <div className="fw-carousel-item">
              {/* this (first) box will be hidden under 1680px resolution */}
              <div className="category-box-container half">
                <a
                  href="listings-half-screen-map-grid-1.html"
                  className="category-box"
                  data-background-image="images/category-box-01.jpg"
                >
                  <div className="category-box-content">
                    <h3>Hotels</h3>
                    <span>64 listings</span>
                  </div>
                  <span className="category-box-btn">Browse</span>
                </a>
              </div>

              <div className="category-box-container half">
                <a
                  href="listings-half-screen-map-grid-1.html"
                  className="category-box"
                  data-background-image="images/category-box-02.jpg"
                >
                  <div className="category-box-content">
                    <h3>Shops</h3>
                    <span>14 listings</span>
                  </div>
                  <span className="category-box-btn">Browse</span>
                </a>
              </div>
            </div>
            {/* Item / End*/}
            {/* Item */}
            <div className="fw-carousel-item">
              <div className="category-box-container">
                <a
                  href="listings-half-screen-map-grid-1.html"
                  className="category-box"
                  data-background-image="images/category-box-03.jpg"
                >
                  <div className="category-box-content">
                    <h3>Events</h3>
                    <span>67 listings</span>
                  </div>
                  <span className="category-box-btn">Browse</span>
                </a>
              </div>
            </div>
            {/* Item / End*/}
          </div>
        </div>
        {/* Categories Carousel / End*/}
      </div>
    );
  }
}

export default PopularCategories;
