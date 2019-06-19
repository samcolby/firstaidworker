import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { ListItem } from "react-native-elements";
import { FastImage } from "react-native-fast-image";

/**
 * React Pure component used to display a person's
 * information on the row of a flat list.
 *
 * This is used on the People Near Me tab.
 *
 * @class PersonListItem
 * @extends {PureComponent}
 */
class PersonListItem extends PureComponent {
  static propTypes = {
    person: PropTypes.object.isRequired,
    onPress: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.onPress(this.props.person);
  }

  render() {
    const { name, job_title, avatar_uri } = this.props.person;

    return (
      <ListItem
        leftAvatar={{
          rounded: true,
          source: { uri: avatar_uri },
          title: name[0],
          ImageComponent: FastImage
        }}
        onPress={this.onPress}
        subtitle={job_title}
        title={name}
      />
    );
  }
}

export default PersonListItem;
