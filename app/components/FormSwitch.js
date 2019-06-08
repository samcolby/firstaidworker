import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { ListItem } from "react-native-elements";

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
    const { label } = this.props;

    return <ListItem switch={{ value: true }} title={label} />;
  }
}

export default FormSwitch;
