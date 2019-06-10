import React from "react";
import PropTypes from "prop-types";

import { SafeAreaView, ScrollView, Text } from "react-native";
import { ListItem } from "react-native-elements";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { LoadingScreen, PersonHeaderCard } from "../components";

import { COLOURS, NAVIGATOR_PARAMS } from "../Constants";

import { QUERY_PERSON } from "../GraphQLQueries";

class ScreenPerson extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  static navigationOptions = ({ navigation }) => {
    return { title: navigation.getParam(NAVIGATOR_PARAMS.PERSON).name };
  };

  render() {
    const person = this.props.navigation.getParam(NAVIGATOR_PARAMS.PERSON);
    const { id } = person;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLOURS.BACKGROUND }}>
        <Query
          query={gql`
            ${QUERY_PERSON}
          `}
          variables={{ id }}
        >
          {({ loading, error, data }) => {
            if (loading) return <LoadingScreen />;
            if (error) return <Text>Error :(</Text>;

            const person = data.profile[0];
            const { email, phone } = person;

            return (
              <ScrollView contentInsetAdjustmentBehavior="automatic">
                <PersonHeaderCard person={person} />
                <ListItem title={email} />
                <ListItem title={phone} />
              </ScrollView>
            );
          }}
        </Query>
      </SafeAreaView>
    );
  }
}

export default ScreenPerson;
