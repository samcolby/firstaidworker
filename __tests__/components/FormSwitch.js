import React from "react";
import { shallow } from "enzyme";

import renderer from "react-test-renderer";
import FormSwitch from "../../app/components/FormSwitch";

const testProps = {
  fieldName: "MyField",
  formikProps: { formikValue: 2 },
  label: "My field label"
};

describe("<FormSwitch /> component", () => {
  it("renders correctly", () => {
    const component = shallow(<FormSwitch {...testProps} />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("defaults to value = false", () => {
    const component = shallow(<FormSwitch {...testProps} />);
    expect(component.prop("switch").value).toEqual(false);
  });

  it("displays the correct initialValue", () => {
    const component = shallow(
      <FormSwitch initialValue={true} {...testProps} />
    );
    expect(component.prop("switch").value).toEqual(true);
  });

  it("displays the label", () => {
    const component = shallow(<FormSwitch {...testProps} />);
    expect(component.prop("title")).toBe(testProps.label);
  });

  it("onValueChange on the switch component is called", () => {
    const onValueChange = jest.fn();
    const component = shallow(
      <FormSwitch
        initialValue={false}
        switchProps={{ onValueChange: onValueChange }}
        {...testProps}
      />
    );

    component.prop("switch").onValueChange();

    expect(onValueChange).toHaveBeenCalled();
  });
});
