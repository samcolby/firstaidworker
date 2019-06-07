import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { ListItem } from "react-native-elements";
import { Marker, Callout } from "react-native-maps";

/**
 * Given an array of person objects (People)
 * this React Pure Component will return a number of
 * React Native Maps map markers, one for each person
 * with a custom Callout displaying there details.
 *
 * @class PeopleMapMarkers
 * @extends {PureComponent}
 */
class PeopleMapMarkers extends PureComponent {
  static propTypes = {
    people: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return this.props.people.map((person, i) => (
      <Marker
        coordinate={{
          latitude: person.latitude,
          longitude: person.longitude
        }}
        key={person.id}
      >
        <Callout>
          <ListItem
            leftAvatar={{ rounded: true, source: { uri: person.picture } }}
            hideChevron
            title={person.name}
            subtitle={person.job_title}
            containerStyle={{ borderBottomWidth: 0 }}
          />
        </Callout>
      </Marker>
    ));
  }
}

export default PeopleMapMarkers;
