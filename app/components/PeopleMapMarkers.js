import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { ListItem } from "react-native-elements";
import { Marker, Callout } from "react-native-maps";
import { FastImage } from "react-native-fast-image";

/**
 * Given an array of person objects (People)
 * this React Pure Component will return a number of
 * React Native Maps map markers, one for each person
 * with a custom Callout displaying their details.
 *
 * @class PeopleMapMarkers
 * @extends {PureComponent}
 */
class PeopleMapMarkers extends PureComponent {
  static propTypes = {
    people: PropTypes.array.isRequired,
    highlightPersonId: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  getMarkerProps(highlightPersonId, person) {
    if (highlightPersonId) {
      if (highlightPersonId === person.id) {
        return {
          pinColor: "green"
        };
      } else {
        return {
          opacity: 0.3
        };
      }
    } else {
      return {
        pinColor: "red"
      };
    }
  }

  render() {
    const { highlightPersonId, people } = this.props;

    return people.map((person, i) => (
      <Marker
        coordinate={{
          latitude: person.location.coordinates[0],
          longitude: person.location.coordinates[1]
        }}
        key={person.id}
        {...this.getMarkerProps(highlightPersonId, person)}
      >
        <Callout>
          <ListItem
            leftAvatar={{
              rounded: true,
              source: { uri: person.avatar_uri },
              title: person.name[0],
              ImageComponent: FastImage
            }}
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
