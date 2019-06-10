import React from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";

import { COLOURS } from "../Constants";

function LoadingScreen() {
  return (
    <View>
      <StatusBar networkActivityIndicatorVisible={true} />
      <ActivityIndicator
        style={styles.activityIndicator}
        size="large"
        color={COLOURS.TAB_HINTS}
      />
    </View>
  );
}

var styles = StyleSheet.create({
  activityIndicator: {
    marginTop: 20
  }
});

export default LoadingScreen;
