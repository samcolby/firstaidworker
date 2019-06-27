import React from "react";

import { shallow } from "enzyme";

import PersonDataItem from "../../app/components/PersonDataItem";

const ICON = "ios-business";
const ICON_TYPE = "ionicons";
const TITLE = "This is the title";
const VALUE = "This is the value";

describe("PersonDataItem Component", () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <PersonDataItem
        icon={ICON}
        iconType={ICON_TYPE}
        title={TITLE}
        value={VALUE}
      />
    );
  });

  it("should render without issues", () => {
    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("displays the value", () => {
    expect(component.prop("title")).toEqual(VALUE);
  });

  it("displays the leftElement in a prop", () => {
    const leftElementComponent = component.wrap(component.prop("leftElement"));
    expect(leftElementComponent.length).toBe(1);
  });

  it("displays the icon", () => {
    const leftElementComponent = component.wrap(component.prop("leftElement"));
    expect(leftElementComponent.prop("icon")).toBe(ICON);
  });

  it("displays the iconType", () => {
    const leftElementComponent = component.wrap(component.prop("leftElement"));
    expect(leftElementComponent.prop("iconType")).toBe(ICON_TYPE);
  });

  it("displays the title", () => {
    const leftElementComponent = component.wrap(component.prop("leftElement"));
    expect(leftElementComponent.prop("title")).toBe(TITLE);
  });
});

describe("PersonDataItem Component with action", () => {
  let component;
  const onPress = jest.fn();

  beforeEach(() => {
    component = shallow(
      <PersonDataItem
        icon={ICON}
        iconType={ICON_TYPE}
        title={TITLE}
        value={VALUE}
        onPress={onPress}
      />
    );
  });

  it("should render without issues", () => {
    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("displays the value", () => {
    expect(component.prop("title")).toEqual(VALUE);
  });

  it("displays the leftElement in a prop", () => {
    const leftElementComponent = component.wrap(component.prop("leftElement"));
    expect(leftElementComponent.length).toBe(1);
  });

  it("displays the icon", () => {
    const leftElementComponent = component.wrap(component.prop("leftElement"));
    expect(leftElementComponent.prop("icon")).toBe(ICON);
  });

  it("displays the iconType", () => {
    const leftElementComponent = component.wrap(component.prop("leftElement"));
    expect(leftElementComponent.prop("iconType")).toBe(ICON_TYPE);
  });

  it("displays the title", () => {
    const leftElementComponent = component.wrap(component.prop("leftElement"));
    expect(leftElementComponent.prop("title")).toBe(TITLE);
  });

  it("displays renders onPress as a prop", () => {
    expect(component.prop("titleProps").onPress).toBe(onPress);
  });

  it("displays renders a different style when onPress present", () => {
    expect(component.prop("titleStyle")).toBeTruthy();
  });
});
