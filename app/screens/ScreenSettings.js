import React from "react";
import PropTypes from "prop-types";
import { Button, SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-navigation";

import { COLORS, ROUTES } from "../Constants";

class SettingsScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  static navigationOptions = {
    title: "Settings",
    headerTintColor: COLORS.NAV_HINTS
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
        <ScrollView>
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
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SettingsScreen;
