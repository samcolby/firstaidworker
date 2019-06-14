import React from "react";
import PropTypes from "prop-types";

import { Query } from "react-apollo";

// Generate the GQL queries used in this component
import { QUERY_PERSON } from "../GraphQLQueries";

/**
 * Apollo Query to return a list of people to display on a map
 * @param {Object} props - Standard react prop
 * @param {function} children - Standard react prop, doesn't need to be included
 */
function QueryPerson({ children, id }) {
  return (
    <Query query={QUERY_PERSON} variables={{ id }}>
      {props => {
        return children(props);
      }}
    </Query>
  );
}

QueryPerson.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string.isRequired
};

export default QueryPerson;
