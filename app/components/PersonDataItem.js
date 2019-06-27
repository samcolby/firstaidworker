import React, { memo } from "react";
import PropTypes from "prop-types";

import { StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";

import { COLORS } from "../Constants";
import PersonDataItemLeftElement from "./PersonDataItemLeftElement";

function PeopleDataItem(props) {
  const { onPress, value } = props;

  if (onPress && typeof onPress === "function") {
    return (
      <ListItem
        leftElement={<PersonDataItemLeftElement {...props} />}
        title={value}
        titleStyle={styles.titleOnPress}
        titleProps={{ onPress }}
      />
    );
  } else {
    return (
      <ListItem
        leftElement={<PersonDataItemLeftElement {...props} />}
        title={value}
      />
    );
  }
}

PeopleDataItem.propTypes = {
  icon: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  titleOnPress: {
    color: COLORS.NAV_HINTS,
    textDecorationLine: "underline",
    opacity: 0.9
  }
});

export default memo(PeopleDataItem);
