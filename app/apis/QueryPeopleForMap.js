import React from "react";
import PropTypes from "prop-types";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

// Generate the GQL queries used in this component
const QUERY_PEOPLE_FOR_MAP_DATA = "workers";
/**
 * Query used to get a list of workers to be displayed on the map
 */
const QUERY_PEOPLE_FOR_MAP = gql`
  query WorkersForMap($limit: Int) {
    ${QUERY_PEOPLE_FOR_MAP_DATA}(limit: $limit, where: { is_active: { _eq: true } }) {
      id
      name
      job_title
      avatar_uri
      location
    }
  }
`;

/**
 * Apollo Query to return a list of people to display on a map
 * @param {Object} props - Standard react prop
 * @param {function} children - Standard react prop, doesn't need to be included
 */
function QueryPeopleForMap({ children }) {
  return (
    <Query query={QUERY_PEOPLE_FOR_MAP} variables={{ limit: 50 }}>
      {props => children(props)}
    </Query>
  );
}

QueryPeopleForMap.propTypes = {
  children: PropTypes.func
};

export default QueryPeopleForMap;
export { QUERY_PEOPLE_FOR_MAP, QUERY_PEOPLE_FOR_MAP_DATA };
