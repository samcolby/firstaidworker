import React from "react";
import PropTypes from "prop-types";

import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import MapView from "react-native-maps";

import QueryPeopleForMap from "../apis/QueryPeopleForMap";
import { PeopleMapMarkers } from "../components";

import { COLORS } from "../Constants";

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
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
          <QueryPeopleForMap>
            {({ loading, error, data, networkStatus }) => {
              if (loading) return null;
              if (error) return <Text>Error :(</Text>;

              return (
                <>
                  <StatusBar
                    networkActivityIndicatorVisible={
                      loading || networkStatus < 7
                    }
                  />
                  <PeopleMapMarkers people={data.profile} />
                </>
              );
            }}
          </QueryPeopleForMap>
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
