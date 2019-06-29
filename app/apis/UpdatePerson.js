import React from "react";
import PropTypes from "prop-types";

import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

/**
 * Query used to get a list of workers to be displayed on the map
 */
const MUTATION_UPDATE_PERSON = gql`
  mutation update_worker($id: uuid!, $changes: workers_set_input!) {
    update_workers(where: { id: { _eq: $id } }, _set: $changes) {
      affected_rows
      returning {
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
  }
`;

/**
 * Apollo Query to return a list of people to display on a map
 * @param {Object} props - Standard react prop
 * @param {function} children - Standard react prop, doesn't need to be included
 */
function UpdatePerson({ children }) {
  return (
    <Mutation mutation={MUTATION_UPDATE_PERSON}>
      {(update_workers, { data }) => children(update_workers, { data })}
    </Mutation>
  );
}

UpdatePerson.propTypes = {
  children: PropTypes.func
};

export default UpdatePerson;
export { MUTATION_UPDATE_PERSON };
