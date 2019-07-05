import React from "react";
import PropTypes from "prop-types";

import { StatusBar, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-navigation";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import withGeolocation from "../contexts/GeolocationContext";

import QueryPeopleNearMe, {
  QUERY_PEOPLE_NEAR_ME_DATA,
  QUERY_PEOPLE_NEAR_ME_TYPE
} from "../apis/QueryPeopleNearMe";
import { PeopleMapMarkers } from "../components";

import { COLORS, NAVIGATOR_PARAMS } from "../Constants";

class ScreenDetails extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    location: PropTypes.object,
    isUpdatingLocation: PropTypes.bool,
    getCurrentPosition: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
  }

  getRegion(person) {
    if (!person) {
      return null;
    }

    if (person) {
      return {
        region: {
          latitude: person.location.coordinates[0],
          longitude: person.location.coordinates[1],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      };
    }
  }

  render() {
    const highlightPerson = this.props.navigation.getParam(
      NAVIGATOR_PARAMS.PERSON
    );

    const { location } = this.props;

    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.BACKGROUND
        }}
      >
        <MapView
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          provider={PROVIDER_GOOGLE}
          ref={this.mapRef}
          showsBuildings
          showsCompass
          showsMyLocationButton
          showsUserLocation
          style={styles.map}
          userLocationAnnotationTitle="My location"
          {...this.getRegion(highlightPerson)}
        >
          <QueryPeopleNearMe
            queryType={QUERY_PEOPLE_NEAR_ME_TYPE.QUERY}
            searchQuery=""
            latitude={location.latitude}
            longitude={location.longitude}
          >
            {({ loading, error, data, networkStatus }) => {
              if (loading)
                return (
                  <StatusBar
                    networkActivityIndicatorVisible={networkStatus < 7}
                  />
                );
              if (error) return <Text>Error :(</Text>;

              const people = data[QUERY_PEOPLE_NEAR_ME_DATA];

              return (
                <>
                  <StatusBar
                    networkActivityIndicatorVisible={networkStatus < 7}
                  />
                  <PeopleMapMarkers
                    people={people}
                    highlightPersonId={highlightPerson && highlightPerson.id}
                  />
                </>
              );
            }}
          </QueryPeopleNearMe>
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

export default withGeolocation(ScreenDetails);
