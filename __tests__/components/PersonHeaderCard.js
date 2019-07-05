import React from "react";
import { shallow } from "enzyme";

import { Text } from "react-native";
import { Avatar } from "react-native-elements";

import PersonHeaderCard from "../../app/components/PersonHeaderCard";

import PersonMock from "../mocksdata/PersonMock";

describe("<PersonHeaderCard /> component", () => {
  it("renders correctly", () => {
    const component = shallow(<PersonHeaderCard person={PersonMock} />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("displays the person's picture", () => {
    const component = shallow(<PersonHeaderCard person={PersonMock} />);

    const avatarComponent = component.find(Avatar);

    expect(avatarComponent.prop("source").uri).toEqual(PersonMock.avatar_uri);
  });

  it("displays the person's name", () => {
    const component = shallow(<PersonHeaderCard person={PersonMock} />);

    expect(
      component.containsMatchingElement(<Text>{PersonMock.name}</Text>)
    ).toBe(true);
  });

  it("displays the job title", () => {
    const component = shallow(<PersonHeaderCard person={PersonMock} />);

    expect(
      component.containsMatchingElement(<Text>{PersonMock.job_title}</Text>)
    ).toBe(true);
  });
});
