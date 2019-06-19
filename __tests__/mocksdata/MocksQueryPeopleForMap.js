// Generate the GQL queries used in this component
import { QUERY_PEOPLE_FOR_MAP } from "../../app/GraphQLQueries";

const mocksForQueryPeopleForMap = [
  {
    request: {
      query: QUERY_PEOPLE_FOR_MAP,
      variables: {
        limit: 50
      }
    },
    result: {
      data: {
        workers: [
          {
            id: "9f47bfa4-892e-4abd-8a18-0576f8759051",
            name: "Kaitlin Burnett",
            job_title: "Marketing",
            is_active: true,
            avatar_uri: "https://randomuser.me/api/portraits/women/17.jpg",
            company: { name: "ECLIPSENT" },
            email: "kaitlinburnett@eclipsent.com",
            phone: "+1 (880) 414-2185",
            location: { coordinates: [51.1910548, -4.1274755] }
          },
          {
            id: "0b8a6373-4530-41d7-87a9-435552dfa334",
            name: "Sargent Bush",
            job_title: "Sales",
            is_active: true,
            avatar_uri: "https://randomuser.me/api/portraits/men/32.jpg",
            company: { name: "JUMPSTACK" },
            email: "sargentbush@jumpstack.com",
            phone: "+1 (839) 403-2338",
            location: { coordinates: [51.2096548, -4.1144755] }
          },
          {
            id: "54f58dfd-3f17-427c-b1d1-74c26a77f700",
            name: "Key Whitley",
            job_title: "Michael Jackson Impersonator",
            is_active: true,
            avatar_uri: "https://randomuser.me/api/portraits/women/45.jpg",
            company: { name: "DIGINETIC" },
            email: "keywhitley@diginetic.com",
            phone: "+1 (968) 469-2764",
            location: { coordinates: [51.1826548, -4.0674755] }
          }
        ]
      }
    }
  }
];

const mocksForQueryPeopleForMapError = [
  {
    request: {
      query: QUERY_PEOPLE_FOR_MAP,
      variables: {
        limit: 50
      }
    },
    error: new Error("ERROR!")
  }
];

export { mocksForQueryPeopleForMap, mocksForQueryPeopleForMapError };
