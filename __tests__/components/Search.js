// __tests__/Intro-test.js
import React from "react";

import { shallow } from "enzyme";

import Search from "../../app/components/Search";

describe("<Search /> component", () => {
  it("renders correctly", () => {
    const component = shallow(<Search />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("handles onChangeText", () => {
    const onChangeText = jest.fn();
    const component = shallow(<Search onChangeText={onChangeText} />);

    component.simulate("changeText");
    expect(onChangeText).toHaveBeenCalled();
    expect(component).toMatchSnapshot();
  });

  it("handles onClear", () => {
    const onClear = jest.fn();
    const component = shallow(<Search onClear={onClear} />);

    component.simulate("clear");
    expect(onClear).toHaveBeenCalled();
    expect(component).toMatchSnapshot();
  });

  it("handles onCancel", () => {
    const onCancel = jest.fn();
    const component = shallow(<Search onCancel={onCancel} />);

    component.simulate("cancel");
    expect(onCancel).toHaveBeenCalled();
    expect(component).toMatchSnapshot();
  });
});
