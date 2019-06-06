// __tests__/Intro-test.js
import React from "react";

import renderer from "react-test-renderer";

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

describe("PersonListItem Component", () => {
  test("it renders correctly", () => {
    const tree = renderer.create(<PersonListItem person={testData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
