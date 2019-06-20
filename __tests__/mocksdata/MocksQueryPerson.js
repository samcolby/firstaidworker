// Generate the GQL queries used in this component
import { QUERY_PERSON, QUERY_PERSON_DATA } from "../../app/apis/QueryPerson";

const mocksForQueryPerson = [
  {
    request: {
      query: QUERY_PERSON,
      variables: {
        id: "54f58dfd-3f17-427c-b1d1-74c26a77f700"
      }
    },
    result: {
      data: {
        [QUERY_PERSON_DATA]: [
          {
            id: "54f58dfd-3f17-427c-b1d1-74c26a77f700",
            name: "Key Whitley",
            job_title: "Michael Jackson Impersonator",
            is_active: true,
            avatar_uri: "https://randomuser.me/api/portraits/women/45.jpg",
            company: { name: "DIGINETIC" },
            email: "keywhitley@diginetic.com",
            phone: "+1 (968) 469-2764",
            location: {
              coordinates: [-78.5011, -35.033]
            }
          }
        ]
      }
    }
  }
];

const mocksForQueryPersonError = [
  {
    request: {
      query: QUERY_PERSON,
      variables: {
        id: "54f58dfd-3f17-427c-b1d1-74c26a77f700"
      }
    },
    error: new Error("ERROR!")
  }
];

export { mocksForQueryPerson, mocksForQueryPersonError };
