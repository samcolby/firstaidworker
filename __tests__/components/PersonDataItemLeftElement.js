import React from "react";
import { Text } from "react-native";
import { Icon } from "react-native-elements";

import { shallow } from "enzyme";

import PersonDataItemLeftElement from "../../app/components/PersonDataItemLeftElement";

const ICON = "ios-business";
const ICON_TYPE = "ionicons";
const TITLE = "This is the title";

describe("PersonDataItemLeftElement Component", () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <PersonDataItemLeftElement
        icon={ICON}
        iconType={ICON_TYPE}
        title={TITLE}
        value=""
      />
    );
  });

  it("should render without issues", () => {
    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("displays the title", () => {
    expect(
      component.containsMatchingElement(<Text>This is the title</Text>)
    ).toBe(true);
  });

  it("displays the correct iconType", () => {
    const iconComponent = component.find(Icon);
    expect(iconComponent.prop("type")).toEqual("ionicons");
  });

  it("displays the correct icon", () => {
    const iconComponent = component.find(Icon);
    expect(iconComponent.prop("name")).toEqual("ios-business");
  });
});
