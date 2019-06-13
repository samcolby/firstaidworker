import React from "react";
import PropTypes from "prop-types";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { QUERY_PEOPLE_NEAR_ME, SEARCH_PEOPLE } from "../GraphQLQueries";

const QUERY_PEOPLE_NEAR_ME_TYPE = {
  SEARCH: 0,
  QUERY: 1
};

const GQL_QUERY = gql`
  ${QUERY_PEOPLE_NEAR_ME}
`;
const GQL_SEARCH = gql`
  ${SEARCH_PEOPLE}
`;

function getQueryConfig(queryType, searchQuery) {
  if (queryType === QUERY_PEOPLE_NEAR_ME_TYPE.SEARCH) {
    return {
      gqlQuery: GQL_SEARCH,
      gqlVariables: { searchquery: searchQuery }
    };
  } else {
    return {
      gqlQuery: GQL_QUERY,
      gqlVariables: { limit: 200, offset: 0 }
    };
  }
}

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
