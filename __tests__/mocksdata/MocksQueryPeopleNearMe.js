// Generate the GQL queries used in this component
import {
  QUERY_PEOPLE_NEAR_ME,
  QUERY_PEOPLE_NEAR_ME_DATA,
  SEARCH_PEOPLE,
  SEARCH_PEOPLE_DATA
} from "../../app/apis/QueryPeopleNearMe";

const mocksForQueryPeopleNearMe = [
  {
    request: {
      query: QUERY_PEOPLE_NEAR_ME,
      variables: {
        latitude: "51.204655",
        longitude: "-4.124476"
      }
    },
    result: {
      data: {
        [QUERY_PEOPLE_NEAR_ME_DATA]: [
          {
            id: "9f47bfa4-892e-4abd-8a18-0576f8759051",
            name: "Kaitlin Burnett",
            job_title: "Marketing",
            is_active: true,
            avatar_uri: "https://randomuser.me/api/portraits/women/17.jpg",
            company: { name: "ECLIPSENT" },
            email: "kaitlinburnett@eclipsent.com",
            phone: "+1 (880) 414-2185",
            location: {
              coordinates: [-78.5011, -35.033]
            }
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
            location: {
              coordinates: [-78.5011, -35.033]
            }
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
            location: {
              coordinates: [-78.5011, -35.033]
            }
          }
        ]
      }
    }
  }
];

const mocksForQueryPeopleNearMeError = [
  {
    request: {
      query: QUERY_PEOPLE_NEAR_ME,
      variables: {
        latitude: "200",
        longitude: "0"
      }
    },
    error: new Error("ERROR!")
  }
];

const mocksForSearchPeople = [
  {
    request: {
      query: SEARCH_PEOPLE,
      variables: {
        searchquery: "DummyQuery"
      }
    },
    result: {
      data: {
        [SEARCH_PEOPLE_DATA]: [
          {
            id: "c4ab9532-198e-4891-8719-8167005e9fa9",
            name: "Maryellen Baxter",
            job_title: "Flouncer",
            is_active: true,
            avatar_uri: "https://randomuser.me/api/portraits/women/12.jpg",
            company: { name: "PANZENT" },
            email: "maryellenbaxter@panzent.com-",
            phone: "+1 (848) 545-3302",
            location: {
              coordinates: [51.2000548, -4.1474755]
            }
          },
          {
            id: "1b773d36-b5c4-4ea9-982a-5ba319dc7bb7",
            name: "Fry Newton",
            job_title: "Michael Jackson Impersonator",
            is_active: true,
            avatar_uri: "https://randomuser.me/api/portraits/men/65.jpg",
            company: { name: "NIXELT" },
            email: "frynewton@nixelt.com",
            phone: "+1 (994) 435-3779",
            location: { coordinates: [51.1722548, -4.1174755] }
          },
          {
            id: "228ce656-08ad-46cc-97f8-b4abe71b7b67",
            name: "Lily Watson",
            job_title: "Sales",
            is_active: false,
            avatar_uri: "https://randomuser.me/api/portraits/women/32.jpg",
            company: { name: "TWIGGERY" },
            email: "lilywatson@twiggery.com",
            phone: "+1 (971) 417-2079",
            location: { coordinates: [51.1900548, -4.1074755] }
          }
        ]
      }
    }
  }
];

const mocksForSearchPeopleError = [
  {
    request: {
      query: SEARCH_PEOPLE,
      variables: {
        searchquery: "DummyQuery"
      }
    },
    error: new Error("ERROR!")
  }
];

export {
  mocksForQueryPeopleNearMe,
  mocksForQueryPeopleNearMeError,
  mocksForSearchPeople,
  mocksForSearchPeopleError
};
