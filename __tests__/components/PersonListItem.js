// __tests__/Intro-test.js
import React from "react";

import { shallow } from "enzyme";

import PersonListItem from "../../app/components/PersonListItem";

const testData = {
  id: "c4ab9532-198e-4891-8719-8167005e9fa9",
  name: "Maryellen Baxter",
  job_title: "Flouncer",
  isActive: true,
  picture: "https://randomuser.me/api/portraits/women/12.jpg",
  company: "PANZENT",
  email: "maryellenbaxter@panzent.com",
  phone: "+1 (848) 545-3302",
  latitude: 51.2000548,
  longitude: -4.1474755
};

describe("<PersonListItem /> component", () => {
  it("renders correctly", () => {
    const component = shallow(<PersonListItem person={testData} />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("displays the person's name correctly", () => {
    const component = shallow(<PersonListItem person={testData} />);
    expect(component.prop("title")).toEqual(testData.name);
  });

  it("displays the person's picture", () => {
    const component = shallow(<PersonListItem person={testData} />);
    expect(component.prop("leftAvatar").source.uri).toEqual(testData.picture);
  });

  it("handles onPress", () => {
    const onPress = jest.fn();
    const component = shallow(
      <PersonListItem person={testData} onPress={onPress} />
    );

    component.simulate("press");
    expect(onPress).toHaveBeenCalled();
    expect(component).toMatchSnapshot();
  });
});
