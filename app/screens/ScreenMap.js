import React from "react";
import PropTypes from "prop-types";

import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import MapView from "react-native-maps";

import { Query } from "react-apollo";

import { PeopleMapMarkers } from "../components";

import { COLORS } from "../Constants";

// DUMMY DATA FOR TESTING WITH
// import PEOPLE from "../testdata/people";

import { QUERY_PEOPLE_FOR_MAP } from "../GraphQLQueries";

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
          <Query query={QUERY_PEOPLE_FOR_MAP} variables={{ limit: 50 }}>
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
          </Query>
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
