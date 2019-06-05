import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

import { COLOURS } from "../Constants";

/**
 * React Pure Component for a search input control
 *
 * @class Search
 * @extends {PureComponent}
 */
class Search extends PureComponent {
  static propTypes = {
    onChangeText: PropTypes.func,
    onClear: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SearchBar
        containerStyle={styles.containerStyle}
        onChangeText={this.props.onChangeText}
        onClear={this.props.onClear}
        placeholder="Search..."
        platform="ios"
      />
    );
  }
}

// <SearchBar
// containerStyle={styles.containerStyle}
// inputStyle={styles.inputStyle}
// lightTheme
// onChangeText={this.props.onChangeText}
// onClear={this.props.onClear}
// placeholder="Search..."
// showLoading
// />

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: COLOURS.BACKGROUND
  },
  inputStyle: {
    backgroundColor: "#eee"
  }
});

export default Search;
