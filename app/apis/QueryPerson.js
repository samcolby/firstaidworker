import React from "react";
import PropTypes from "prop-types";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

// Generate the GQL queries used in this component
const QUERY_PERSON_DATA = "workers";

const QUERY_PERSON = gql`
  query($id: uuid!) {
    ${QUERY_PERSON_DATA}(where: { id: { _eq: $id } }, distinct_on: id) {
      id
      name
      job_title
      is_active
      avatar_uri
      company {
        name
      }
      department
      email
      phone
      location
    }
  }
`;

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
export { QUERY_PERSON, QUERY_PERSON_DATA };
