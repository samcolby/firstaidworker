import { gql } from "apollo-boost";

const QUERY_PEOPLE_NEAR_ME = gql`
  query Profile($limit: Int, $offset: Int) {
    profile(
      limit: $limit
      offset: $offset
      where: { is_active: { _eq: true } }
    ) {
      id
      name
      job_title
      picture
    }
  }
`;

const QUERY_PEOPLE_FOR_MAP = gql`
  query Profile($limit: Int) {
    profile(limit: $limit, where: { is_active: { _eq: true } }) {
      id
      name
      job_title
      picture
      latitude
      longitude
    }
  }
`;

const QUERY_PERSON = gql`
  query($id: uuid!) {
    profile(where: { id: { _eq: $id } }, distinct_on: id) {
      id
      name
      job_title
      is_active
      picture
      company
      email
      phone
      latitude
      longitude
    }
  }
`;

const SEARCH_PEOPLE = gql`
  query($searchquery: String!) {
    search_profile(args: { search: $searchquery }) {
      id
      name
      job_title
      picture
    }
  }
`;
export {
  QUERY_PEOPLE_NEAR_ME,
  QUERY_PEOPLE_FOR_MAP,
  QUERY_PERSON,
  SEARCH_PEOPLE
};
