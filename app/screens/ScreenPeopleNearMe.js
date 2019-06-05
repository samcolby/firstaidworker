import React from "react";
import PropTypes from "prop-types";

import { FlatList, SafeAreaView } from "react-native";

import { PersonListItem, Search } from "../components";

import { COLOURS, NAVIGATOR_PARAMS, ROUTES } from "../Constants";

// DUMMY DATA FOR TESTING WITH
import PEOPLE from "../testdata/people";

class ScreenPeopleNearMe extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  static navigationOptions = {
    title: "Near me"
  };

  constructor(props) {
    super(props);

    this.state = {
      dataSource: PEOPLE
    };
  }

  getItemLayout = (data, index) => ({
    length: 150,
    offset: 150 * index,
    index
  });

  keyExtractor = (item, index) => item.guid;

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
        <FlatList
          data={this.state.dataSource}
          getItemLayout={this.getItemLayout}
          initialScrollIndex={0.33}
          keyExtractor={this.keyExtractor}
          ListHeaderComponent={<Search />}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

export default ScreenPeopleNearMe;
