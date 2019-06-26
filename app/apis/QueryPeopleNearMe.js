import React from "react";
import PropTypes from "prop-types";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const QUERY_PEOPLE_NEAR_ME_DATA = "workers_near_location";
/**
 * GraphQL query to get the list of people nearest the user
 * Used by the QueryPeopleNearMe component
 */
const QUERY_PEOPLE_NEAR_ME = gql`
  query WorkersNearLocation($latitude: String!, $longitude: String!) {
    ${QUERY_PEOPLE_NEAR_ME_DATA}(args: {latitude: $latitude, longitude: $longitude}) {
      id
      name
      job_title
      avatar_uri
      location
    }
  }
`;

const SEARCH_PEOPLE_DATA = "search_workers";
/**
 * GraphQL query to search for active people
 * Used by the QueryPeopleNearMe component
 */
const SEARCH_PEOPLE = gql`
  query($searchquery: String!) {
    ${SEARCH_PEOPLE_DATA}(args: { search: $searchquery }) {
      id
      name
      job_title
      avatar_uri
    }
  }
`;

/**
 * Object containing the different queryTypes that can be used
 */
const QUERY_PEOPLE_NEAR_ME_TYPE = {
  SEARCH: 0,
  QUERY: 1
};

/**
 * Returns the correct configuration for the Apollo Query Component
 *
 * @param {number} queryType
 *    The QUERY_PEOPLE_NEAR_ME_TYPE value to be used to specify the type of query to call
 * @param {string} searchQuery
 *    The string to search for if queryType === QUERY_PEOPLE_NEAR_ME_TYPE.SEARCH
 */
function getQueryConfig(queryType, searchQuery, latitude, longitude) {
  if (queryType === QUERY_PEOPLE_NEAR_ME_TYPE.SEARCH) {
    return {
      gqlQuery: SEARCH_PEOPLE,
      gqlVariables: { searchquery: searchQuery }
    };
  } else {
    return {
      gqlQuery: QUERY_PEOPLE_NEAR_ME,
      gqlVariables: {
        latitude: latitude.toString(),
        longitude: longitude.toString()
      }
    };
  }
}

/**
 * Apollo query component to return a list of people to display in a FlatList
 * This component can execute either a standard query of a search query
 * depending on the queryType value passed in as a prop
 *
 * @param {Object} props - Standard react prop
 * @param {function} children - Standard react prop, doesn't need to be included
 * @param {number} queryType
 *    The QUERY_PEOPLE_NEAR_ME_TYPE value to be used to specify the type of query to call
 * @param {string} searchQuery
 *    The string to search for if queryType === QUERY_PEOPLE_NEAR_ME_TYPE.SEARCH
 */
function QueryPeopleNearMe({
  children,
  queryType,
  searchQuery,
  latitude,
  longitude
}) {
  const config = getQueryConfig(queryType, searchQuery, latitude, longitude);

  return (
    <Query
      fetchPolicy="cache-and-network"
      query={config.gqlQuery}
      variables={config.gqlVariables}
    >
      {props => children(props)}
    </Query>
  );
}

QueryPeopleNearMe.propTypes = {
  children: PropTypes.func,
  queryType: PropTypes.number.isRequired,
  searchQuery: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
};

export default QueryPeopleNearMe;
export {
  QUERY_PEOPLE_NEAR_ME_TYPE,
  QUERY_PEOPLE_NEAR_ME,
  QUERY_PEOPLE_NEAR_ME_DATA,
  SEARCH_PEOPLE,
  SEARCH_PEOPLE_DATA
};
