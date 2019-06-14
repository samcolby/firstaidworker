// Generate the GQL queries used in this component
import { QUERY_PERSON } from "../../app/GraphQLQueries";

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
        profile: [
          {
            id: "54f58dfd-3f17-427c-b1d1-74c26a77f700",
            name: "Key Whitley",
            job_title: "Michael Jackson Impersonator",
            is_active: true,
            picture: "https://randomuser.me/api/portraits/women/45.jpg",
            company: "DIGINETIC",
            email: "keywhitley@diginetic.com",
            phone: "+1 (968) 469-2764",
            latitude: 51.1826548,
            longitude: -4.0674755
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
