import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { ListItem } from "react-native-elements";
// REM Not currently used anywhere

class PeopleDataItems extends PureComponent {
  static propTypes = {
    person: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { name, picture } = this.props.person;

    return (
      <ListItem roundAvatar avatar={picture && { uri: picture }} title={name} />
    );
  }
}

export default PeopleDataItems;
