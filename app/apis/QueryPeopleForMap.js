import React from "react";
import PropTypes from "prop-types";

import { Query } from "react-apollo";

// Generate the GQL queries used in this component
import { QUERY_PEOPLE_FOR_MAP } from "../GraphQLQueries";

/**
 * Apollo Query to return a list of people to display on a map
 * @param {Object} props - Standard react prop
 * @param {function} children - Standard react prop, doesn't need to be included
 */
function QueryPeopleForMap({ children }) {
  return (
    <Query query={QUERY_PEOPLE_FOR_MAP} variables={{ limit: 50 }}>
      {props => {
        return children(props);
      }}
    </Query>
  );
}

QueryPeopleForMap.propTypes = {
  children: PropTypes.any
};

export default QueryPeopleForMap;
