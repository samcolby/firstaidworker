import React from "react";
import PropTypes from "prop-types";

import { SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-navigation";

import { COLORS } from "../Constants";

class ScreenSettingsDetails extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  static navigationOptions = {
    title: "Settings2",
    headerTintColor: COLORS.NAV_HINTS
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
        <ScrollView>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Details 2!</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ScreenSettingsDetails;
