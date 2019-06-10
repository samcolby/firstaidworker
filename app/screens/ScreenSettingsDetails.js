import React from "react";
import PropTypes from "prop-types";

import { SafeAreaView, Text, View } from "react-native";

import { COLORS } from "../Constants";

class ScreenSettingsDetails extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Details 2!</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default ScreenSettingsDetails;
