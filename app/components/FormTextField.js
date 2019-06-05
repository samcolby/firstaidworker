import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { View } from "react-native";
import { Input } from "react-native-elements";

/**
 * React Pure Component to display
 * a label, text field and error message
 * @class FormTextField
 * @extends {PureComponent}
 */
class FormTextField extends PureComponent {
  static propTypes = {
    fieldName: PropTypes.string.isRequired,
    formikProps: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  _getErrorMessage = (fieldName, arrErrors, touched) => {
    if (arrErrors[fieldName] && touched[fieldName]) {
      return arrErrors[fieldName];
    } else {
      return null;
    }
  };

  render() {
    const { fieldName, formikProps, label, ...passthruProps } = this.props;
    const { errors, handleBlur, handleChange, touched, values } = formikProps;

    const errorMessage = this._getErrorMessage(fieldName, errors, touched);

    return (
      <View>
        <Input
          errorMessage={errorMessage}
          label={label}
          onChangeText={handleChange(fieldName)}
          onBlur={handleBlur(fieldName)}
          value={values[fieldName]}
          {...passthruProps}
        />
      </View>
    );
  }
}

export default FormTextField;
