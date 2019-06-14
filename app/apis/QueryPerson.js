import React from "react";
import PropTypes from "prop-types";

import { Query } from "react-apollo";

// Generate the GQL queries used in this component
import { QUERY_PERSON } from "../GraphQLQueries";

/**
 * Apollo Query to return the data for a person based on their id
 * @param {Object} props - Standard react prop
 * @param {function} children - Standard react prop, doesn't need to be included
 * @param {string} id - the id of the person to retrieve
 */
function QueryPerson({ children, id }) {
  return (
    <Query query={QUERY_PERSON} variables={{ id }}>
      {props => children(props)}
    </Query>
  );
}

QueryPerson.propTypes = {
  children: PropTypes.func,
  id: PropTypes.string.isRequired
};

export default QueryPerson;
