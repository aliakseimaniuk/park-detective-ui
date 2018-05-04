// @flow

import React from 'react';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.searchClick = this.searchClick.bind(this);
  }

  searchClick() {
    alert('Search');
  }

  render() {
    return (
      <div className="main-search-container">
        <div className="main-search-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Find Nearby Parks</h2>
                <h4>Explore top-rated parks, activities and more</h4>
                <div className="main-search-input">
                  <div className="main-search-input-item">
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                      value=""
                    />
                  </div>
                  <div className="main-search-input-item location">
                    <div id="autocomplete-container">
                      <input
                        id="autocomplete-input"
                        type="text"
                        placeholder="Location"
                      />
                    </div>
                    <a href="">
                      <i className="fa fa-map-marker" />
                    </a>
                  </div>
                  <div className="main-search-input-item">
                    <select
                      data-placeholder="All Categories"
                      className="chosen-select"
                    >
                      <option>All Categories</option>
                      <option>Shops</option>
                      <option>Hotels</option>
                      <option>Restaurants</option>
                      <option>Fitness</option>
                      <option>Events</option>
                    </select>
                  </div>
                  <button className="button" onClick={this.searchClick}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchContainer;
