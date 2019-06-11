const QUERY_PEOPLE_NEAR_ME = `
  query Profile ($limit: Int, $offset: Int ) {
    profile (
      limit: $limit,
      offset: $offset,
      where: {
        is_active: {_eq: true}
      }
    ) {
      id
      name
      job_title
      picture
    }
  }
`;

const QUERY_PEOPLE_FOR_MAP = `
query Profile ($limit: Int ) {
    profile (
      limit: $limit,
      where: {
        is_active: {_eq: true}
      }
    ) {
      id
      name
      job_title
      picture
      latitude
      longitude
    }
  }
`;

const QUERY_PERSON = `
  query ($id: uuid!) {
    profile (
      where: {
        id: {_eq: $id}
      },
      distinct_on: id
    ) {
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
export { QUERY_PEOPLE_NEAR_ME, QUERY_PEOPLE_FOR_MAP, QUERY_PERSON };
