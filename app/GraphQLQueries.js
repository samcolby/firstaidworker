import gql from "apollo-boost";

const queryPeopleNearMe = gql`
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

export { queryPeopleNearMe };
