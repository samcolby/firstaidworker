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

// const styles = StyleSheet.create({
//   containerStyle: {
//     borderWidth: 0,
//     padding: 0,
//     paddingVertical: 15,
//     margin: 0
//   },
//   headerContainer: {
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     paddingLeft: 20
//   },
//   headerTextContainer: {
//     fontSize: 20,
//     marginLeft: 20,
//     flex: 1,
//     flexDirection: "column"
//   },
//   headerTextCompany: { fontSize: 20 },
//   headerTextJobDescription: {
//     fontSize: 16,
//     color: "grey"
//   }
// });

export default FormTextField;
