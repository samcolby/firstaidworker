import React from "react";
import { shallow } from "enzyme";

import { Text } from "react-native";
import { Avatar } from "react-native-elements";

import PersonHeaderCard from "../../app/components/PersonHeaderCard";

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

describe("<PersonHeaderCard /> component", () => {
  it("renders correctly", () => {
    const component = shallow(<PersonHeaderCard person={testData} />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("displays the person's picture", () => {
    const component = shallow(<PersonHeaderCard person={testData} />);

    const avatarComponent = component.find(Avatar);

    expect(avatarComponent.prop("source").uri).toEqual(testData.picture);
  });

  it("displays the person's company", () => {
    const component = shallow(<PersonHeaderCard person={testData} />);

    // const textComponent = component.find(Text).at(0);

    // expect(textComponent.props().children).toEqual(testData.company);

    expect(
      component.containsMatchingElement(<Text>{testData.company}</Text>)
    ).toBe(true);
  });

  it("displays the job title", () => {
    const component = shallow(<PersonHeaderCard person={testData} />);

    expect(
      component.containsMatchingElement(<Text>{testData.job_title}</Text>)
    ).toBe(true);
  });
});
