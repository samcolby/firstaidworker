import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { StyleSheet, Text, View } from "react-native";
import { Avatar, Card } from "react-native-elements";

/**
 * React Pure Component to display
 * a header card for a person.
 *
 * This can be used along the top of a screen
 * that shows relevant data for the passed in person.
 *
 * @class PersonHeaderCard
 * @extends {PureComponent}
 */
class PersonHeaderCard extends PureComponent {
  static propTypes = {
    person: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { name, job_title, avatar_uri } = this.props.person;

    return (
      <Card containerStyle={styles.containerStyle}>
        <View style={styles.headerContainer}>
          <Avatar
            activeOpacity={0.7}
            rounded
            size="large"
            source={{ uri: avatar_uri }}
            title={name[0]}
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTextTitle}>{name}</Text>
            <Text style={styles.headerTextSubtitle}>{job_title}</Text>
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 0,
    padding: 0,
    paddingVertical: 15,
    margin: 0
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 20
  },
  headerTextContainer: {
    fontSize: 20,
    marginLeft: 20,
    flex: 1,
    flexDirection: "column"
  },
  headerTextTitle: { fontSize: 20 },
  headerTextSubtitle: {
    fontSize: 16,
    color: "grey"
  }
});

export default PersonHeaderCard;
