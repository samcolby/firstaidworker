import React from "react";
import PropTypes from "prop-types";

import { Text } from "react-native";
import { SafeAreaView, ScrollView } from "react-navigation";
import { ListItem } from "react-native-elements";

import QueryPerson, { QUERY_PERSON_DATA } from "../apis/QueryPerson";

import { LoadingScreen, PersonHeaderCard } from "../components";

import { COLORS, NAVIGATOR_PARAMS } from "../Constants";

class ScreenPerson extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam(NAVIGATOR_PARAMS.PERSON).name
    };
  };

  render() {
    const person = this.props.navigation.getParam(NAVIGATOR_PARAMS.PERSON);
    const { id } = person;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
        <QueryPerson id={id}>
          {({ loading, error, data }) => {
            if (loading) return <LoadingScreen />;
            if (error) return <Text>Error :(</Text>;

            const person = data[QUERY_PERSON_DATA][0];
            const { email, phone } = person;

            return (
              <ScrollView contentInsetAdjustmentBehavior="automatic">
                <PersonHeaderCard person={person} />
                <ListItem title={email} />
                <ListItem title={phone} />
              </ScrollView>
            );
          }}
        </QueryPerson>
      </SafeAreaView>
    );
  }
}

export default ScreenPerson;
