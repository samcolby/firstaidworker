import React, { memo } from "react";
import PropTypes from "prop-types";

import { ListItem } from "react-native-elements";

/**
 * React Pure Component to display
 * a label, switch component and error message
 * @param {Object} props - Standard react props
 * @param {string} fieldName
 *    The name of this field
 * @param {Object} formikProps
 *    The formik props used by this switch
 * @param {string} label
 *    The label for the switch component, defaults to "Field label"
 * @param {Object} switchProps
 *    Extra props to be passed to the switch component
 */
function FormSwitch(props) {
  const { fieldName, formikProps, label = "Field label", switchProps } = props;

  const { setFieldValue, values } = formikProps;

  const toggle = newValue => {
    setFieldValue(fieldName, newValue);
    if (switchProps && typeof switchProps.onValueChange === "function") {
      switchProps.onValueChange(newValue);
    }
  };

  return (
    <ListItem
      switch={{
        ...switchProps,
        value: values[fieldName],
        onValueChange: toggle
      }}
      title={label}
    />
  );
}

FormSwitch.propTypes = {
  fieldName: PropTypes.string.isRequired,
  formikProps: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  switchProps: PropTypes.object
};

export default memo(FormSwitch);
