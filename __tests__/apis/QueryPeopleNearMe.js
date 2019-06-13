import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import { MockedProvider } from "react-apollo/test-utils";

import wait from "waait";

import QueryPeopleNearMe, {
  QUERY_PEOPLE_NEAR_ME_TYPE
} from "../../app/apis/QueryPeopleNearMe";

// Generate the GQL queries used in this component
import { QUERY_PEOPLE_NEAR_ME, SEARCH_PEOPLE } from "../../app/GraphQLQueries";

const mocks_for_query = [
  {
    request: {
      query: QUERY_PEOPLE_NEAR_ME,
      variables: {
        limit: 200,
        offset: 0
      }
    },
    result: {
      data: {
        profile: [
          {
            id: "9f47bfa4-892e-4abd-8a18-0576f8759051",
            name: "Kaitlin Burnett",
            job_title: "Marketing",
            is_active: true,
            picture: "https://randomuser.me/api/portraits/women/17.jpg",
            company: "ECLIPSENT",
            email: "kaitlinburnett@eclipsent.com",
            phone: "+1 (880) 414-2185",
            latitude: 51.1910548,
            longitude: -4.1274755
          },
          {
            id: "0b8a6373-4530-41d7-87a9-435552dfa334",
            name: "Sargent Bush",
            job_title: "Sales",
            is_active: true,
            picture: "https://randomuser.me/api/portraits/men/32.jpg",
            company: "JUMPSTACK",
            email: "sargentbush@jumpstack.com",
            phone: "+1 (839) 403-2338",
            latitude: 51.2096548,
            longitude: -4.1144755
          },
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

describe("<QueryPeopleNearMe queryType={query}/> component", () => {
  it("Renders correctly", () => {
    const component = shallow(
      <QueryPeopleNearMe
        queryType={QUERY_PEOPLE_NEAR_ME_TYPE.QUERY}
        searchQuery=""
      />
    );

    expect(component.length).toBe(1);
  });

  it("Renders loading correctly", () => {
    const component = renderer.create(
      <MockedProvider mocks={mocks_for_query} addTypename={false}>
        <QueryPeopleNearMe
          queryType={QUERY_PEOPLE_NEAR_ME_TYPE.QUERY}
          searchQuery=""
        >
          {({ data, error, fetchMore, loading, networkStatus, refetch }) => {
            if (error) {
              return <Text>error</Text>;
            } else if (loading) {
              return <Text>loading</Text>;
            } else {
              return <Text>{JSON.stringify(data.profile)}</Text>;
            }
          }}
        </QueryPeopleNearMe>
      </MockedProvider>
    );

    expect(component).toMatchSnapshot();
  });

  it("Renders data correctly", async () => {
    const component = renderer.create(
      <MockedProvider mocks={mocks_for_query} addTypename={false}>
        <QueryPeopleNearMe
          queryType={QUERY_PEOPLE_NEAR_ME_TYPE.QUERY}
          searchQuery=""
        >
          {({ data, error, fetchMore, loading, networkStatus, refetch }) => {
            if (error) {
              return <Text>error</Text>;
            } else if (loading) {
              return <Text>loading</Text>;
            } else {
              return <Text>{JSON.stringify(data.profile)}</Text>;
            }
          }}
        </QueryPeopleNearMe>
      </MockedProvider>
    );

    await wait(0);

    expect(component).toMatchSnapshot();
  });
});

describe("<QueryPeopleNearMe queryType={search}/> component", () => {
  it("Renders correctly", () => {
    const component = shallow(
      <QueryPeopleNearMe
        queryType={QUERY_PEOPLE_NEAR_ME_TYPE.SEARCH}
        searchQuery="This is a test string"
      />
    );

    expect(component.length).toBe(1);
  });
});
