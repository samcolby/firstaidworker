import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { SafeAreaView, Text } from "react-navigation";

import QueryPerson, { QUERY_PERSON_DATA } from "../apis/QueryPerson";

import { LoadingScreen, PersonProfile } from "../components";

import { COLORS } from "../Constants";

class ScreenProfile extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "My Profile"
  };

  render() {
    const id = "bdad2759-3276-4855-99bf-ae31f60bfa09";

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
        <QueryPerson id={id}>
          {({ loading, error, data }) => {
            if (loading) return <LoadingScreen />;
            if (error) return <Text>Error :(</Text>;

            const person = data[QUERY_PERSON_DATA][0];
            return <PersonProfile person={person} />;
          }}
        </QueryPerson>
      </SafeAreaView>
    );
  }
}

export default ScreenProfile;
