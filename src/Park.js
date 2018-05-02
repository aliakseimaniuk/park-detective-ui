// @flow

import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Park = props => (
  <Query query={PARK_QUERY} variables={{ parkId: props.match.params.id }}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;

      return (
        <div>
          {data.parks.map(p => (
            <div key={p.id}>
              <div>{p.id}</div>
              <div>{p.name}</div>
              <div>{p.location.latitude}</div>
              <div>{p.location.latitude}</div>
              <div>{p.genre}</div>
              <div>{p.activity}</div>
            </div>
          ))}
        </div>
      );
    }}
  </Query>
);

const PARK_QUERY = gql`
  query parks($parkId: Int!) {
    parks(id: $parkId) {
      id
      name
      location {
        latitude
        longitude
      }
      genre
      activity
    }
  }
`;

export default Park;
