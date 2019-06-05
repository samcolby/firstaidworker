const QUERY_PEOPLE_NEAR_ME = `
  {
    profile {
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

export { QUERY_PEOPLE_NEAR_ME };
