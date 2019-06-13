import React from "react";
import PropTypes from "prop-types";

import { Query } from "react-apollo";

// Generate the GQL queries used in this component
import { QUERY_PEOPLE_NEAR_ME, SEARCH_PEOPLE } from "../GraphQLQueries";

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
function getQueryConfig(queryType, searchQuery) {
  if (queryType === QUERY_PEOPLE_NEAR_ME_TYPE.SEARCH) {
    return {
      gqlQuery: SEARCH_PEOPLE,
      gqlVariables: { searchquery: searchQuery }
    };
  } else {
    return {
      gqlQuery: QUERY_PEOPLE_NEAR_ME,
      gqlVariables: { limit: 200, offset: 0 }
    };
  }
}

/**
 *
 * @param {Object} props - Standard react prop
 * @param {function} children - Standard react prop, doesn't need to be included
 * @param {number} queryType
 *    The QUERY_PEOPLE_NEAR_ME_TYPE value to be used to specify the type of query to call
 * @param {string} searchQuery
 *    The string to search for if queryType === QUERY_PEOPLE_NEAR_ME_TYPE.SEARCH
 */
function QueryPeopleNearMe({ children, queryType, searchQuery }) {
  const config = getQueryConfig(queryType, searchQuery);

  return (
    <Query
      fetchPolicy="cache-and-network"
      query={config.gqlQuery}
      variables={config.gqlVariables}
    >
      {props => {
        return children(props);
      }}
    </Query>
  );
}

QueryPeopleNearMe.propTypes = {
  children: PropTypes.any,
  queryType: PropTypes.number.isRequired,
  searchQuery: PropTypes.string.isRequired
};

export default QueryPeopleNearMe;
export { QUERY_PEOPLE_NEAR_ME_TYPE };
