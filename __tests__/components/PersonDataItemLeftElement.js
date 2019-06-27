import React from "react";
import { Text } from "react-native";
import { Icon } from "react-native-elements";

import { shallow } from "enzyme";

import PersonDataItemLeftElement from "../../app/components/PersonDataItemLeftElement";

describe("PersonDataItemLeftElement Component", () => {
  it("should render without issues", () => {
    const component = shallow(
      <PersonDataItemLeftElement
        icon="ios-business"
        iconType="ionicons"
        title="This is the title"
        value=""
      />
    );

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("displays the title", () => {
    const component = shallow(
      <PersonDataItemLeftElement
        icon="ios-business"
        iconType="ionicons"
        title="This is the title"
        value=""
      />
    );

    expect(
      component.containsMatchingElement(<Text>This is the title</Text>)
    ).toBe(true);
  });

  it("displays the correct iconType", () => {
    const component = shallow(
      <PersonDataItemLeftElement
        icon="ios-business"
        iconType="ionicons"
        title="This is the title"
        value=""
      />
    );

    const iconComponent = component.find(Icon);
    expect(iconComponent.prop("type")).toEqual("ionicons");
  });

  it("displays the correct icon", () => {
    const component = shallow(
      <PersonDataItemLeftElement
        icon="ios-business"
        iconType="ionicons"
        title="This is the title"
        value=""
      />
    );

    const iconComponent = component.find(Icon);
    expect(iconComponent.prop("name")).toEqual("ios-business");
  });
});
