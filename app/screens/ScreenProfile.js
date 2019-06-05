import React, { PureComponent } from "react";
import { SafeAreaView } from "react-native";
import PropTypes from "prop-types";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { PersonHeaderCard, PersonProfileForm } from "../components";

import { COLOURS } from "../Constants";

// DUMMY DATA FOR TESTING WITH
import PEOPLE from "../testdata/people";

class ScreenProfile extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  static navigationOptions = { title: "My Profile" };

  render() {
    const person = PEOPLE[2];

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLOURS.BACKGROUND }}>
        <KeyboardAwareScrollView>
          <PersonHeaderCard person={person} />
          <PersonProfileForm person={person} />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

export default ScreenProfile;
