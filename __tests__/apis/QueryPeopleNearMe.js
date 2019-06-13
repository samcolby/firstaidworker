import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import { MockedProvider } from "react-apollo/test-utils";

import wait from "waait";

import QueryPeopleNearMe, {
  QUERY_PEOPLE_NEAR_ME_TYPE
} from "../../app/apis/QueryPeopleNearMe";

import {
  mocksForQueryPeopleNearMe,
  mocksForSearchPeople
} from "../mocksdata/MocksQueryPeopleNearMe";

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
      <MockedProvider mocks={mocksForQueryPeopleNearMe} addTypename={false}>
        <QueryPeopleNearMe
          queryType={QUERY_PEOPLE_NEAR_ME_TYPE.QUERY}
          searchQuery=""
        >
          {({ data, error, fetchMore, loading, networkStatus, refetch }) => {
            if (error) {
              return <Text>error</Text>;
            } else if (loading) {
              return <Text>Loading</Text>;
            } else {
              return <Text>{JSON.stringify(data.profile)}</Text>;
            }
          }}
        </QueryPeopleNearMe>
      </MockedProvider>
    );

    const p = component.root.findByType("Text");
    expect(JSON.stringify(p.children).includes("Loading")).toBe(true);

    expect(component).toMatchSnapshot();
  });

  it("Renders data correctly", async () => {
    const component = renderer.create(
      <MockedProvider mocks={mocksForQueryPeopleNearMe} addTypename={false}>
        <QueryPeopleNearMe
          queryType={QUERY_PEOPLE_NEAR_ME_TYPE.QUERY}
          searchQuery=""
        >
          {({ data, error, fetchMore, loading, networkStatus, refetch }) => {
            if (error) {
              return <Text>Error: {JSON.stringify(error)}</Text>;
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

    const p = component.root.findByType("Text");
    expect(JSON.stringify(p.children).includes("Kaitlin Burnett")).toBe(true);

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

  it("Renders loading correctly", () => {
    const component = renderer.create(
      <MockedProvider mocks={mocksForSearchPeople} addTypename={false}>
        <QueryPeopleNearMe
          queryType={QUERY_PEOPLE_NEAR_ME_TYPE.SEARCH}
          searchQuery="DummyQuery"
        >
          {({ data, error, fetchMore, loading, networkStatus, refetch }) => {
            if (error) {
              return <Text>error</Text>;
            } else if (loading) {
              return <Text>Loading</Text>;
            } else {
              return <Text>{JSON.stringify(data.search_profile)}</Text>;
            }
          }}
        </QueryPeopleNearMe>
      </MockedProvider>
    );

    const p = component.root.findByType("Text");
    expect(JSON.stringify(p.children).includes("Loading")).toBe(true);

    expect(component).toMatchSnapshot();
  });

  it("Renders data correctly", async () => {
    const component = renderer.create(
      <MockedProvider mocks={mocksForSearchPeople} addTypename={false}>
        <QueryPeopleNearMe
          queryType={QUERY_PEOPLE_NEAR_ME_TYPE.SEARCH}
          searchQuery="DummyQuery"
        >
          {({ data, error, fetchMore, loading, networkStatus, refetch }) => {
            if (error) {
              return <Text>Error: {JSON.stringify(error)}</Text>;
            } else if (loading) {
              return <Text>loading</Text>;
            } else {
              return <Text>{JSON.stringify(data.search_profile)}</Text>;
            }
          }}
        </QueryPeopleNearMe>
      </MockedProvider>
    );

    await wait(0);

    const p = component.root.findByType("Text");
    expect(JSON.stringify(p.children).includes("Maryellen Baxter")).toBe(true);

    expect(component).toMatchSnapshot();
  });
});
