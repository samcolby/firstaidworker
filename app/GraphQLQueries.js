import { gql } from "apollo-boost";

/**
 * GraphQL query to get the list of people nearest the user
 * Used by the QueryPeopleNearMe component
 */
const QUERY_PEOPLE_NEAR_ME = gql`
  query Workers($limit: Int, $offset: Int) {
    workers(
      limit: $limit
      offset: $offset
      where: { is_active: { _eq: true } }
    ) {
      id
      name
      job_title
      avatar_uri
    }
  }
`;

const QUERY_PEOPLE_FOR_MAP = gql`
  query WorkersForMap($limit: Int) {
    workers(limit: $limit, where: { is_active: { _eq: true } }) {
      id
      name
      job_title
      avatar_uri
      location
    }
  }
`;

const QUERY_PERSON = gql`
  query($id: uuid!) {
    workers(where: { id: { _eq: $id } }, distinct_on: id) {
      id
      name
      job_title
      is_active
      avatar_uri
      company {
        name
      }
      email
      phone
      location
    }
  }
`;

/**
 * GraphQL query to search for active people
 * Used by the QueryPeopleNearMe component
 */
const SEARCH_PEOPLE = gql`
  query($searchquery: String!) {
    search_workers(args: { search: $searchquery }) {
      id
      name
      job_title
      avatar_uri
    }
  }
`;

export {
  QUERY_PEOPLE_NEAR_ME,
  QUERY_PEOPLE_FOR_MAP,
  QUERY_PERSON,
  SEARCH_PEOPLE
};
