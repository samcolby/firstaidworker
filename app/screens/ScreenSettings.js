import React from "react";
import PropTypes from "prop-types";
import { Button, SafeAreaView, Text, View } from "react-native";

import { COLORS, ROUTES } from "../Constants";

class SettingsScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  static navigationOptions = {
    title: "Settings"
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Settings!</Text>
          <Button
            title="Go to Details 2"
            onPress={() =>
              this.props.navigation.navigate(ROUTES.SCREEN.SETTINGS_DETAILS)
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default SettingsScreen;
