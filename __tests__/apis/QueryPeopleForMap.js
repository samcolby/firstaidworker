import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import { MockedProvider } from "react-apollo/test-utils";

import wait from "waait";

import QueryPeopleForMap from "../../app/apis/QueryPeopleForMap";

import {
  mocksForQueryPeopleForMap,
  mocksForQueryPeopleForMapError
} from "../mocksdata/MocksQueryPeopleForMap";

describe("<QueryPeopleForMap /> component", () => {
  it("Renders correctly", () => {
    const component = shallow(<QueryPeopleForMap />);
    expect(component.length).toBe(1);
  });

  it("Renders loading correctly", () => {
    const component = renderer.create(
      <MockedProvider mocks={mocksForQueryPeopleForMap} addTypename={false}>
        <QueryPeopleForMap>
          {({ data, error, fetchMore, loading, networkStatus, refetch }) => {
            if (error) {
              return <Text>error</Text>;
            } else if (loading) {
              return <Text>Loading</Text>;
            } else {
              return <Text>{JSON.stringify(data.workers)}</Text>;
            }
          }}
        </QueryPeopleForMap>
      </MockedProvider>
    );

    const textComponent = component.root.findByType("Text");
    expect(textComponent.children[0]).toEqual("Loading");
    expect(component).toMatchSnapshot();
  });

  it("Renders data correctly", async () => {
    const component = renderer.create(
      <MockedProvider mocks={mocksForQueryPeopleForMap} addTypename={false}>
        <QueryPeopleForMap>
          {({ data, error, fetchMore, loading, networkStatus, refetch }) => {
            if (error) {
              return <Text>Error: {JSON.stringify(error)}</Text>;
            } else if (loading) {
              return <Text>loading</Text>;
            } else {
              return <Text>{JSON.stringify(data.workers)}</Text>;
            }
          }}
        </QueryPeopleForMap>
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
        mocks={mocksForQueryPeopleForMapError}
        addTypename={false}
      >
        <QueryPeopleForMap>
          {({ data, error, fetchMore, loading, networkStatus, refetch }) => {
            if (error) {
              return <Text>ERROR!</Text>;
            } else if (loading) {
              return <Text>loading</Text>;
            } else {
              return <Text>{JSON.stringify(data.workers)}</Text>;
            }
          }}
        </QueryPeopleForMap>
      </MockedProvider>
    );

    await wait(0); // wait for response

    const textComponent = component.root.findByType("Text");
    expect(textComponent.children[0]).toContain("ERROR!");
  });
});
