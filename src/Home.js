// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import SearchContainer from './components/home/SearchContainer';
import PopularCategories from './components/home/PopularCategories';

const Home = () => (
  <Query query={ALL_PARKS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;

      return (
        <div>
          <SearchContainer />
          <PopularCategories />
          {data.parks.map(p => (
            <div key={p.id}>
              <div>{p.id}</div>
              <div>
                <Link to={`/park/${p.id}`}>{p.name}</Link>
              </div>
            </div>
          ))}
        </div>
      );
    }}
  </Query>
);

const ALL_PARKS_QUERY = gql`
  {
    parks {
      id
      name
      location {
        latitude
        longitude
      }
    }
  }
`;

export default Home;
