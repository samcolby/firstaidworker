import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Platform, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

import { COLORS } from "../Constants";

/**
 * React Pure Component for a search input control
 *
 * @class Search
 * @extends {PureComponent}
 */
class Search extends PureComponent {
  static propTypes = {
    onCancel: PropTypes.func,
    onChangeText: PropTypes.func,
    onClear: PropTypes.func,
    value: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = { query: props.value };
  }

  onChangeText = query => {
    this.setState({ query });
    if (typeof this.props.onChangeText === "function") {
      this.props.onChangeText(query);
    }
  };

  render() {
    return (
      <SearchBar
        containerStyle={styles.containerStyle}
        onCancel={this.props.onCancel}
        onChangeText={this.onChangeText}
        onClear={this.props.onClear}
        placeholder="Search..."
        platform={Platform.OS}
        value={this.state.query}
      />
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: COLORS.BACKGROUND
  },
  inputStyle: {
    backgroundColor: "#eee"
  }
});

export default Search;
