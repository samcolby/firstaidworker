import React from "react";
import PropTypes from "prop-types";

import { SafeAreaView, Text } from "react-native";
import { FlatList } from "react-navigation";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { PersonListItem, Search } from "../components";

import { COLORS, NAVIGATOR_PARAMS, ROUTES } from "../Constants";

// DUMMY DATA FOR TESTING WITH
// import PEOPLE from "../testdata/people";

import { QUERY_PEOPLE_NEAR_ME, SEARCH_PEOPLE } from "../GraphQLQueries";

const DEFAULT_QUERY_STATE = {
  isSearch: false,
  searchQuery: "",
  gqlQuery: QUERY_PEOPLE_NEAR_ME,
  gqlVariables: { limit: 200, offset: 0 },
  gqlDataName: "profile"
};

const DEFAULT_SEARCH_STATE = {
  isSearch: true,
  gqlQuery: SEARCH_PEOPLE,
  gqlDataName: "search_profile"
};

class ScreenPeopleNearMe extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  static navigationOptions = {
    title: "Near me"
  };

  constructor(props) {
    super(props);
    this.state = DEFAULT_QUERY_STATE;
  }

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
    if (this.state.isSearch) return;
    fetchMore({
      variables: {
        offset: data[this.state.gqlDataName].length
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (
          !fetchMoreResult ||
          fetchMoreResult[this.state.gqlDataName].length === 0
        ) {
          return prev;
        }
        return {
          // Concatenate the new feed results after the old ones
          [this.state.gqlDataName]: prev[this.state.gqlDataName].concat(
            fetchMoreResult[this.state.gqlDataName]
          )
        };
      }
    });
  };

  onClearSearch = () => {
    this.setState(DEFAULT_QUERY_STATE);
  };

  onCancelSearch = () => {
    this.setState(DEFAULT_QUERY_STATE);
  };

  onChangeSearchText = searchQuery => {
    if (searchQuery.length === 0) {
      this.setState(DEFAULT_QUERY_STATE);
    } else if (searchQuery.length > 2) {
      this.setState({
        ...DEFAULT_SEARCH_STATE,
        searchQuery: searchQuery,
        gqlVariables: { searchquery: searchQuery }
      });
    }
  };

  renderItem = ({ item }) => (
    <PersonListItem person={item} onPress={this.onItemPress} />
  );

  renderHeader = () => (
    <Search
      onCancel={this.onCancelSearch}
      onChangeText={this.onChangeSearchText}
      onClear={this.onClearSearch}
      value={this.state.searchQuery}
    />
  );

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
        <Query
          fetchPolicy="cache-and-network"
          query={gql`
            ${this.state.gqlQuery}
          `}
          variables={this.state.gqlVariables}
        >
          {({ data, error, fetchMore, loading, networkStatus, refetch }) => {
            // if (loading && networkStatus < 3) return <LoadingScreen />;
            if (error) return <Text>Error :(</Text>;

            return (
              <FlatList
                data={data[this.state.gqlDataName]}
                keyboardShouldPersistTaps="handled"
                keyExtractor={this.keyExtractor}
                ListHeaderComponent={this.renderHeader}
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
