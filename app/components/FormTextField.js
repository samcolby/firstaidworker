import React, { memo } from "react";
import PropTypes from "prop-types";

import { View } from "react-native";
import { Input } from "react-native-elements";

import _get from "lodash/get";

const getErrorMessage = (fieldName, arrErrors, touched) => {
  if (arrErrors[fieldName] && touched[fieldName]) {
    return arrErrors[fieldName];
  } else {
    return null;
  }
};

/**
 * React Pure Component to display
 * a label, text field and error message
 */
const FormTextField = props => {
  const { fieldName, formikProps, label, ...passthruProps } = props;
  const { errors, handleBlur, handleChange, touched, values } = formikProps;

  const errorMessage = getErrorMessage(fieldName, errors, touched);

  return (
    <View>
      <Input
        errorMessage={errorMessage}
        label={label}
        onChangeText={handleChange(fieldName)}
        onBlur={handleBlur(fieldName)}
        value={_get(values, fieldName)}
        {...passthruProps}
      />
    </View>
  );
};

FormTextField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  formikProps: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};

export default memo(FormTextField);
