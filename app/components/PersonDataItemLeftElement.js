import React, { memo } from "react";
import PropTypes from "prop-types";

import { StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";

import { COLORS } from "../Constants";

function getIconSize(icon, iconType) {
  if (iconType === "ionicons") {
    return 24;
  } else {
    return 18;
  }
}

function PersonDataItemLeftElement({ icon, iconType, title }) {
  return (
    <>
      <Icon
        name={icon}
        size={getIconSize(icon, iconType)}
        type={iconType}
        color={COLORS.NAV_HINTS}
        containerStyle={styles.iconContainer}
        iconStyle={styles.iconStyle}
      />
      <Text style={styles.titleStyle}>{title}</Text>
    </>
  );
}

PersonDataItemLeftElement.propTypes = {
  icon: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

var styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    width: 18
  },
  iconStyle: { opacity: 0.9 },
  titleStyle: {
    color: COLORS.NAV_HINTS,
    opacity: 0.9,
    fontSize: 14,
    marginLeft: 6,
    width: 64
  }
});

export default memo(PersonDataItemLeftElement);
