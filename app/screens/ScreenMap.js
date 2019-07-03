import React from "react";
import PropTypes from "prop-types";

import { StatusBar, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-navigation";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import GeolocationContext from "../contexts/GeolocationContext";

import QueryPeopleNearMe, {
  QUERY_PEOPLE_NEAR_ME_DATA,
  QUERY_PEOPLE_NEAR_ME_TYPE
} from "../apis/QueryPeopleNearMe";
import { PeopleMapMarkers } from "../components";

import { COLORS, NAVIGATOR_PARAMS } from "../Constants";

class ScreenDetails extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
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

    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.BACKGROUND
        }}
      >
        <GeolocationContext.Consumer>
          {({ coordinates, isUpdatingCoordinates }) => {
            return (
              <MapView
                initialRegion={{
                  latitude: coordinates.latitude,
                  longitude: coordinates.longitude,
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
                  latitude={coordinates.latitude}
                  longitude={coordinates.longitude}
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
                          highlightPersonId={
                            highlightPerson && highlightPerson.id
                          }
                        />
                      </>
                    );
                  }}
                </QueryPeopleNearMe>
              </MapView>
            );
          }}
        </GeolocationContext.Consumer>
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
