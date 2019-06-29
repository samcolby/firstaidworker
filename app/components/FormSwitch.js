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
  const { label = "Field label", onValueChange, switchProps, value } = props;

  const toggle = newValue => {
    if (onValueChange && typeof onValueChange === "function") {
      onValueChange(newValue);
    }
    if (switchProps && typeof switchProps.onValueChange === "function") {
      switchProps.onValueChange(newValue);
    }
  };

  return (
    <ListItem
      switch={{
        ...switchProps,
        value: value,
        onValueChange: toggle
      }}
      title={label}
    />
  );
}

FormSwitch.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onValueChange: PropTypes.func,
  switchProps: PropTypes.object,
  value: PropTypes.bool
};

export default memo(FormSwitch);
