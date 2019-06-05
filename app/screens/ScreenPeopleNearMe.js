import React from "react";
import PropTypes from "prop-types";

import { FlatList, SafeAreaView, Text } from "react-native";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { PersonListItem, Search } from "../components";

import { COLOURS, NAVIGATOR_PARAMS, ROUTES } from "../Constants";

// DUMMY DATA FOR TESTING WITH
// import PEOPLE from "../testdata/people";
import env from "../../env.json";

import { QUERY_PEOPLE_NEAR_ME } from "../GraphQLQueries";

class ScreenPeopleNearMe extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  static navigationOptions = {
    title: "Near me"
  };

  getItemLayout = (data, index) => ({
    length: 150,
    offset: 150 * index,
    index
  });

  keyExtractor = (item, index) => item.id;

  onItemPress = item => {
    this.props.navigation.navigate(ROUTES.SCREEN.PERSON, {
      [NAVIGATOR_PARAMS.PERSON]: item
    });
  };

  renderItem = ({ item }) => (
    <PersonListItem person={item} onPress={this.onItemPress} />
  );

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLOURS.BACKGROUND }}>
        <Query
          query={gql`
            ${QUERY_PEOPLE_NEAR_ME}
          `}
          context={{
            headers: { "x-hasura-access-key": env.hasura_admin_secret }
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <Text>Loading...</Text>;
            if (error) return <Text>Error :(</Text>;

            return (
              <FlatList
                data={data.profile}
                getItemLayout={this.getItemLayout}
                initialScrollIndex={0.33}
                keyExtractor={this.keyExtractor}
                ListHeaderComponent={<Search />}
                renderItem={this.renderItem}
              />
            );
          }}
        </Query>
      </SafeAreaView>
    );
  }
}

export default ScreenPeopleNearMe;
