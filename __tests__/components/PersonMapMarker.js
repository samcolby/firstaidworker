import React from "react";
import { render } from "react-native-testing-library";

import PersonMock from "../mocksdata/PersonMock";

import PersonMapMarker from "../../app/components/PersonMapMarker";

describe("<PersonMapMarker /> component", () => {
  it("renders correctly with no highlightPersonId", () => {
    const { getByTestId } = render(<PersonMapMarker person={PersonMock} />);

    const component = getByTestId("marker");
    expect(component).toBeTruthy();

    // expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly with another highlightPersonId", () => {
    const { getByTestId } = render(
      <PersonMapMarker
        highlightPersonId="2398472394729384"
        person={PersonMock}
      />
    );

    const component = getByTestId("marker");
    expect(component).toBeTruthy();

    // expect(toJSON()).toMatchSnapshot();
  });

  // This passes but we get an error in the console.
  // Needs further investigation
  it("renders correctly with a matching highlightPersonId", () => {
    const { getByTestId } = render(
      <PersonMapMarker highlightPersonId={PersonMock.id} person={PersonMock} />
    );

    const component = getByTestId("marker");
    expect(component).toBeTruthy();

    // expect(toJSON()).toMatchSnapshot();
  });
});
