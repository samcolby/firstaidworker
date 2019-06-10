import React from "react";
import PropTypes from "prop-types";

import { SafeAreaView, Text } from "react-native";
import { FlatList } from "react-navigation";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { LoadingScreen, PersonListItem, Search } from "../components";

import { COLORS, NAVIGATOR_PARAMS, ROUTES } from "../Constants";

// DUMMY DATA FOR TESTING WITH
// import PEOPLE from "../testdata/people";

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
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
        <Query
          query={gql`
            ${QUERY_PEOPLE_NEAR_ME}
          `}
        >
          {({ loading, error, data, refetch }) => {
            if (loading) return <LoadingScreen />;
            if (error) return <Text>Error :(</Text>;

            return (
              <FlatList
                data={data.profile}
                getItemLayout={this.getItemLayout}
                keyExtractor={this.keyExtractor}
                ListHeaderComponent={<Search />}
                onRefresh={() => refetch()}
                refreshing={data.networkStatus === 4}
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
