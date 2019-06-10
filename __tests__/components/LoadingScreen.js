import React from "react";

import { shallow } from "enzyme";

import LoadingScreen from "../../app/components/LoadingScreen";

describe("LoadingScreen Component", () => {
  it("should render without issues", () => {
    const component = shallow(<LoadingScreen />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
