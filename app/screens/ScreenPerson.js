import React from "react";
import PropTypes from "prop-types";

import { SafeAreaView, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";

import { PersonHeaderCard } from "../components";

import { COLOURS, NAVIGATOR_PARAMS } from "../Constants";

class ScreenPerson extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  static navigationOptions = ({ navigation }) => {
    return { title: navigation.getParam(NAVIGATOR_PARAMS.PERSON).name };
  };

  render() {
    const person = this.props.navigation.getParam(NAVIGATOR_PARAMS.PERSON);
    const {
      email,
      // latitude,
      // longitude,
      phone
    } = person;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLOURS.BACKGROUND }}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <PersonHeaderCard person={person} />
          <ListItem hideChevron title={email} />
          <ListItem hideChevron title={phone} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ScreenPerson;
