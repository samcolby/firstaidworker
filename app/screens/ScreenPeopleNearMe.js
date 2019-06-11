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

  handleOnEndReached = (fetchMore, data) => {
    fetchMore({
      variables: {
        offset: data.profile.length
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult || fetchMoreResult.profile.length === 0) {
          return prev;
        }
        return {
          // Concatenate the new feed results after the old ones
          profile: prev.profile.concat(fetchMoreResult.profile)
        };
      }
    });
  };

  renderItem = ({ item }) => (
    <PersonListItem person={item} onPress={this.onItemPress} />
  );

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
        <Query
          fetchPolicy="cache-and-network"
          query={gql`
            ${QUERY_PEOPLE_NEAR_ME}
          `}
          variables={{ limit: 200, offset: 0 }}
        >
          {({ data, error, fetchMore, loading, networkStatus, refetch }) => {
            if (loading && networkStatus < 3) return <LoadingScreen />;
            if (error) return <Text>Error :(</Text>;

            return (
              <FlatList
                data={data.profile}
                keyExtractor={this.keyExtractor}
                ListHeaderComponent={<Search />}
                onEndReached={() => {
                  this.handleOnEndReached(fetchMore, data);
                }}
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
