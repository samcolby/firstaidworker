import React from "react";
import PropTypes from "prop-types";

import { SafeAreaView, StyleSheet } from "react-native";
import MapView from "react-native-maps";

import { PeopleMapMarkers } from "../components";

import { COLOURS } from "../Constants";

// DUMMY DATA FOR TESTING WITH
import PEOPLE from "../testdata/people";

class ScreenDetails extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 51.1826548,
        longitude: -4.1074755,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  onRegionChange = region => {
    this.setState({ region });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLOURS.BACKGROUND }}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
          <PeopleMapMarkers people={PEOPLE} />
        </MapView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default ScreenDetails;
