import React, { memo } from "react";
import PropTypes from "prop-types";

import { ListItem } from "react-native-elements";
import { Marker, Callout } from "react-native-maps";
import { FastImage } from "react-native-fast-image";

function getMarkerProps(highlightPersonId, person) {
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

/**
 * Given an array of person objects (People)
 * this React Pure Component will return a number of
 * React Native Maps map markers, one for each person
 * with a custom Callout displaying their details.
 *
 * @param {Object} props - Standard react props
 * @param {array} people
 *    An array of person objects to be displayed on a map
 * @param {string} highlightPersonId
 *    The id of the person to be highlighted
 */
function PeopleMapMarkers({ highlightPersonId, people }) {
  return people.map((person, i) => (
    <Marker
      coordinate={{
        latitude: person.location.coordinates[0],
        longitude: person.location.coordinates[1]
      }}
      key={person.id}
      {...getMarkerProps(highlightPersonId, person)}
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

PeopleMapMarkers.propTypes = {
  people: PropTypes.array.isRequired,
  highlightPersonId: PropTypes.string
};

export default memo(PeopleMapMarkers);
