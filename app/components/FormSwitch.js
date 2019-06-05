import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Platform, StyleSheet, Switch, Text, View } from "react-native";
import { ListItem, FormValidationMessage } from "react-native-elements";

/**
 * React Pure Component to display
 * a label, switch component and error message
 * @class FormSwitch
 * @extends {PureComponent}
 */
class FormSwitch extends PureComponent {
  static propTypes = {
    fieldName: PropTypes.string.isRequired,
    formikProps: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { fieldName, formikProps, label, ...passthruProps } = this.props;
    const { errors, handleBlur, handleChange, touched, values } = formikProps;

    return <ListItem hideChevron switch={{ value: true }} title={label} />;
  }
}

// onChangeText={handleChange(fieldName)}
//             onBlur={handleBlur(fieldName)}
//             value={values[fieldName]}
//             {...passthruProps}

// {errors[fieldName] && touched[fieldName] ? (
//   <FormValidationMessage>
//     {formikProps.errors[fieldName]}
//   </FormValidationMessage>
// ) : null}

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     paddingHorizontal: 10
//   },
//   inputContainer: theme => ({
//     flexDirection: "row",
//     borderBottomWidth: 1,
//     alignItems: "center",
//     borderColor: theme.colors.grey3
//   }),
//   iconContainer: {
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     marginLeft: 15
//   },
//   input: {
//     alignSelf: "center",
//     color: "black",
//     fontSize: 18,
//     flex: 1,
//     minHeight: 40
//   },
//   error: theme => ({
//     margin: 5,
//     fontSize: 12,
//     color: theme.colors.error
//   }),
//   label: theme => ({
//     fontSize: 16,
//     color: theme.colors.grey3,
//     ...Platform.select({
//       android: {
//         ...fonts.android.bold
//       },
//       default: {
//         fontWeight: "bold"
//       }
//     })
//   })
// });
export default FormSwitch;
