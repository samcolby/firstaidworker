import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import { MockedProvider } from "react-apollo/test-utils";

import wait from "waait";

import QueryPerson, { QUERY_PERSON_DATA } from "../../app/apis/QueryPerson";

import {
  mocksForQueryPerson,
  mocksForQueryPersonError
} from "../mocksdata/MocksQueryPerson";

const ID = "54f58dfd-3f17-427c-b1d1-74c26a77f700";

describe("<QueryPerson /> component", () => {
  it("Renders correctly", () => {
    const component = shallow(<QueryPerson id={ID} />);
    expect(component.length).toBe(1);
  });

  it("Renders loading correctly", () => {
    const component = renderer.create(
      <MockedProvider mocks={mocksForQueryPerson} addTypename={false}>
        <QueryPerson id={ID}>
          {({ data, error, fetchMore, loading, networkStatus, refetch }) => {
            if (error) {
              return <Text>error</Text>;
            } else if (loading) {
              return <Text>Loading</Text>;
            } else {
              return <Text>{JSON.stringify(data[QUERY_PERSON_DATA])}</Text>;
            }
          }}
        </QueryPerson>
      </MockedProvider>
    );

    const textComponent = component.root.findByType("Text");
    expect(textComponent.children[0]).toEqual("Loading");
    expect(component).toMatchSnapshot();
  });

  it("Renders data correctly", async () => {
    const component = renderer.create(
      <MockedProvider mocks={mocksForQueryPerson} addTypename={false}>
        <QueryPerson id={ID}>
          {({ data, error, fetchMore, loading, networkStatus, refetch }) => {
            if (error) {
              return <Text>Error: {JSON.stringify(error)}</Text>;
            } else if (loading) {
              return <Text>loading</Text>;
            } else {
              return <Text>{JSON.stringify(data[QUERY_PERSON_DATA])}</Text>;
            }
          }}
        </QueryPerson>
      </MockedProvider>
    );

    await wait(0);

    const textComponent = component.root.findByType("Text");
    expect(JSON.parse(textComponent.children)[0].name).toEqual("Key Whitley");

    expect(component).toMatchSnapshot();
  });

  it("Throws errors", async () => {
    const component = renderer.create(
      <MockedProvider mocks={mocksForQueryPersonError} addTypename={false}>
        <QueryPerson id={ID}>
          {({ data, error, fetchMore, loading, networkStatus, refetch }) => {
            if (error) {
              return <Text>ERROR!</Text>;
            } else if (loading) {
              return <Text>loading</Text>;
            } else {
              return <Text>{JSON.stringify(data[QUERY_PERSON_DATA])}</Text>;
            }
          }}
        </QueryPerson>
      </MockedProvider>
    );

    await wait(0); // wait for response

    const textComponent = component.root.findByType("Text");
    expect(textComponent.children[0]).toContain("ERROR!");
  });
});
