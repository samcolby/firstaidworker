import React from "react";
import PropTypes from "prop-types";

import { StatusBar, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-navigation";

import MapView from "react-native-maps";

import QueryPeopleForMap, {
  QUERY_PEOPLE_FOR_MAP_DATA
} from "../apis/QueryPeopleForMap";
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
      },
      width: 200
    };
  }

  onRegionChange = region => {
    this.setState({ region });
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.BACKGROUND
        }}
      >
        <MapView
          onRegionChange={this.onRegionChange}
          region={this.state.region}
          showsBuildings={true}
          showsMyLocationButton={true}
          showsUserLocation={true}
          style={styles.map}
          userLocationAnnotationTitle="My location"
        >
          <QueryPeopleForMap>
            {({ loading, error, data, networkStatus }) => {
              if (loading)
                return (
                  <StatusBar
                    networkActivityIndicatorVisible={networkStatus < 7}
                  />
                );
              if (error) return <Text>Error :(</Text>;

              return (
                <>
                  <StatusBar
                    networkActivityIndicatorVisible={networkStatus < 7}
                  />
                  <PeopleMapMarkers people={data[QUERY_PEOPLE_FOR_MAP_DATA]} />
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
    ...StyleSheet.absoluteFillObject,
    zIndex: -1
  }
});

export default ScreenDetails;
