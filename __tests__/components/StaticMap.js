import React from "react";
import { render, fireEvent } from "react-native-testing-library";

import StaticMap from "../../app/components/StaticMap";

const testProps = {
  latitude: 51.2099548,
  longitude: -4.1149755,
  onPress: jest.fn()
};

describe("<StaticMap /> component", () => {
  it("renders correctly", () => {
    const { getByTestId, toJSON } = render(<StaticMap {...testProps} />);
    const component = getByTestId("staticMapLink");
    expect(component).toBeTruthy();

    expect(toJSON()).toMatchSnapshot();
  });

  it("displays the image centred on the correct latitude and longitude", () => {
    const { getByTestId } = render(<StaticMap {...testProps} />);
    const component = getByTestId("staticMapImage");

    const strRegExp =
      "center=" + testProps.latitude + "," + testProps.longitude;

    expect(JSON.stringify(component.props.source)).toMatch(
      new RegExp(strRegExp)
    );
  });

  it("triggers the onPress function", () => {
    const { getByTestId } = render(<StaticMap {...testProps} />);

    fireEvent(getByTestId("staticMapLink"), "press");

    expect(testProps.onPress).toHaveBeenCalled();
  });
});
