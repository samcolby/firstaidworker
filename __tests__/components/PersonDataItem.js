import React from "react";

import { ListItem } from "react-native-elements";

import { shallow } from "enzyme";

import PersonDataItem from "../../app/components/PersonDataItem";

describe("PersonDataItem Component", () => {
  it("should render without issues", () => {
    const component = shallow(
      <PersonDataItem
        icon="ios-business"
        iconType="ionicons"
        title="This is the title"
        value="This is the value"
      />
    );

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("displays the title", () => {
    const component = shallow(
      <PersonDataItem
        icon="ios-business"
        iconType="ionicons"
        title="This is the title"
        value="This is the value"
      />
    );

    const listItemComponent = component.find(ListItem);
    expect(listItemComponent.prop("title")).toEqual("This is the value");
  });
});
