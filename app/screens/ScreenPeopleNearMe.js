import React from "react";
import PropTypes from "prop-types";

import { RefreshControl, StatusBar, Text } from "react-native";
import { FlatList, SafeAreaView } from "react-navigation";

import withGeolocation from "../contexts/GeolocationContext";
import { LoadingScreen, PersonListItem, Search } from "../components";

import QueryPeopleNearMe, {
  QUERY_PEOPLE_NEAR_ME_TYPE,
  QUERY_PEOPLE_NEAR_ME_DATA,
  SEARCH_PEOPLE_DATA
} from "../apis/QueryPeopleNearMe";

import { COLORS, NAVIGATOR_PARAMS, ROUTES } from "../Constants";

const DEFAULT_QUERY_STATE = {
  dataArrayName: QUERY_PEOPLE_NEAR_ME_DATA,
  queryType: QUERY_PEOPLE_NEAR_ME_TYPE.QUERY,
  searchQuery: ""
};

class ScreenPeopleNearMe extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    coordinates: PropTypes.object.isRequired,
    isUpdatingCoordinates: PropTypes.bool.isRequired,
    getCurrentPosition: PropTypes.func.isRequired
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
        dataArrayName: SEARCH_PEOPLE_DATA,
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
    const {
      coordinates,
      getCurrentPosition,
      isUpdatingCoordinates
    } = this.props;

    if (this.firstLoad && isUpdatingCoordinates) {
      return null;
    }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
        <QueryPeopleNearMe
          queryType={this.state.queryType}
          searchQuery={this.state.searchQuery}
          latitude={coordinates.latitude}
          longitude={coordinates.longitude}
        >
          {props => {
            const { data, error, loading, networkStatus, refetch } = props;

            if (this.firstLoad && loading) {
              return <LoadingScreen />;
            } else {
              this.firstLoad = false;
            }

            if (error) return <Text>Error :(</Text>;

            return (
              <>
                <StatusBar
                  networkActivityIndicatorVisible={
                    networkStatus < 7 || isUpdatingCoordinates
                  }
                />
                <FlatList
                  data={data[this.state.dataArrayName]}
                  keyboardShouldPersistTaps="handled"
                  keyExtractor={this.keyExtractor}
                  ListHeaderComponent={this.renderHeader}
                  refreshControl={
                    <RefreshControl
                      tintColor={COLORS.TAB_HINTS}
                      onRefresh={() => getCurrentPosition(refetch)}
                      refreshing={
                        data.networkStatus === 4 || isUpdatingCoordinates
                      }
                    />
                  }
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

const WrappedComponent = withGeolocation(ScreenPeopleNearMe);

WrappedComponent.navigationOptions = {
  title: "Near me"
};

export default WrappedComponent;
