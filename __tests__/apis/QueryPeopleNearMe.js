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
  mocksForQueryPeopleNearMeError,
  mocksForSearchPeople,
  mocksForSearchPeopleError
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

    const textComponent = component.root.findByType("Text");
    expect(textComponent.children[0]).toEqual("Loading");

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

    const textComponent = component.root.findByType("Text");
    expect(JSON.parse(textComponent.children)[0].name).toEqual(
      "Kaitlin Burnett"
    );

    expect(component).toMatchSnapshot();
  });

  it("Throws errors", async () => {
    const component = renderer.create(
      <MockedProvider
        mocks={mocksForQueryPeopleNearMeError}
        addTypename={false}
      >
        <QueryPeopleNearMe
          queryType={QUERY_PEOPLE_NEAR_ME_TYPE.QUERY}
          searchQuery=""
        >
          {({ data, error, fetchMore, loading, networkStatus, refetch }) => {
            if (error) {
              return <Text>ERROR!</Text>;
            } else if (loading) {
              return <Text>loading</Text>;
            } else {
              return <Text>{JSON.stringify(data.profile)}</Text>;
            }
          }}
        </QueryPeopleNearMe>
      </MockedProvider>
    );

    await wait(0); // wait for response

    const textComponent = component.root.findByType("Text");
    expect(textComponent.children[0]).toContain("ERROR!");
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

    const textComponent = component.root.findByType("Text");
    expect(textComponent.children[0]).toEqual("Loading");

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

    const textComponent = component.root.findByType("Text");
    expect(JSON.parse(textComponent.children)[0].name).toEqual(
      "Maryellen Baxter"
    );

    expect(component).toMatchSnapshot();
  });

  it("Throws errors", async () => {
    const component = renderer.create(
      <MockedProvider mocks={mocksForSearchPeopleError} addTypename={false}>
        <QueryPeopleNearMe
          queryType={QUERY_PEOPLE_NEAR_ME_TYPE.SEARCH}
          searchQuery="DummyQuery"
        >
          {({ data, error, fetchMore, loading, networkStatus, refetch }) => {
            if (error) {
              return <Text>ERROR!</Text>;
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

    const textComponent = component.root.findByType("Text");
    expect(textComponent.children[0]).toContain("ERROR!");
  });
});
