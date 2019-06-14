import React from "react";
import PropTypes from "prop-types";

import { SafeAreaView, StatusBar, Text } from "react-native";
import { FlatList } from "react-navigation";

import { LoadingScreen, PersonListItem, Search } from "../components";

import QueryPeopleNearMe, {
  QUERY_PEOPLE_NEAR_ME_TYPE
} from "../apis/QueryPeopleNearMe";

import { COLORS, NAVIGATOR_PARAMS, ROUTES } from "../Constants";

const DEFAULT_QUERY_STATE = {
  dataArrayName: "profile",
  queryType: QUERY_PEOPLE_NEAR_ME_TYPE.QUERY,
  searchQuery: ""
};

class ScreenPeopleNearMe extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  static navigationOptions = {
    title: "Near me",
    headerTintColor: COLORS.NAV_HINTS
  };

  firstLoad = true;

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

  onEndReached = (fetchMore, data) => {
    if (this.state.queryType === QUERY_PEOPLE_NEAR_ME_TYPE.SEARCH) {
      return;
    }

    fetchMore({
      variables: {
        offset: data[this.state.dataArrayName].length
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (
          !fetchMoreResult ||
          fetchMoreResult[this.state.dataArrayName].length === 0
        ) {
          return previousResult;
        }
        return {
          // Concatenate the new feed results after the old ones
          [this.state.dataArrayName]: previousResult[
            this.state.dataArrayName
          ].concat(fetchMoreResult[this.state.dataArrayName])
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
        dataArrayName: "search_profile",
        queryType: QUERY_PEOPLE_NEAR_ME_TYPE.SEARCH,
        searchQuery: searchQuery
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
        <QueryPeopleNearMe
          queryType={this.state.queryType}
          searchQuery={this.state.searchQuery}
        >
          {({ data, error, fetchMore, loading, networkStatus, refetch }) => {
            if (this.firstLoad && loading) {
              return <LoadingScreen />;
            } else {
              this.firstLoad = false;
            }

            if (error) return <Text>Error :(</Text>;

            return (
              <>
                <StatusBar
                  networkActivityIndicatorVisible={loading || networkStatus < 7}
                />
                <FlatList
                  data={data[this.state.dataArrayName]}
                  keyboardShouldPersistTaps="handled"
                  keyExtractor={this.keyExtractor}
                  ListHeaderComponent={this.renderHeader}
                  onEndReached={() => {
                    this.onEndReached(fetchMore, data);
                  }}
                  onRefresh={refetch}
                  refreshing={data.networkStatus === 4}
                  renderItem={this.renderItem}
                />
              </>
            );
          }}
        </QueryPeopleNearMe>
      </SafeAreaView>
    );
  }
}

export default ScreenPeopleNearMe;
