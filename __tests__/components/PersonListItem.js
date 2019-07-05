import React from "react";
import { shallow } from "enzyme";

import PersonListItem from "../../app/components/PersonListItem";

import PersonMock from "../mocksdata/PersonMock";

describe("<PersonListItem /> component", () => {
  it("renders correctly", () => {
    const component = shallow(<PersonListItem person={PersonMock} />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("displays the person's name correctly", () => {
    const component = shallow(<PersonListItem person={PersonMock} />);
    expect(component.prop("title")).toEqual(PersonMock.name);
  });

  it("displays the person's picture", () => {
    const component = shallow(<PersonListItem person={PersonMock} />);
    expect(component.prop("leftAvatar").source.uri).toEqual(
      PersonMock.avatar_uri
    );
  });

  it("handles onPress", () => {
    const onPress = jest.fn();
    const component = shallow(
      <PersonListItem person={PersonMock} onPress={onPress} />
    );

    component.simulate("press");
    expect(onPress).toHaveBeenCalled();
    expect(component).toMatchSnapshot();
  });
});
