import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";

import { ListItem } from "react-native-elements";
import { Marker, Callout } from "react-native-maps";
import { FastImage } from "react-native-fast-image";

/**
 * Pure Component to display a
 * React Native Maps map marker
 * with a custom Callout displaying
 * the passed in person's details.
 *
 * @param {Object} props - Standard react props
 * @param {Object} person
 *    An object containgin the person to be displayed on a map
 * @param {string} highlightPersonId
 *    The id of the person to be highlighted
 */
function PersonMapMaker({ highlightPersonId, person }) {
  let markerRef = React.createRef();

  const showCallout = () => {
    markerRef && markerRef.current && markerRef.current.showCallout();
  };

  useEffect(() => {
    if (highlightPersonId === person.id) {
      // we need to pause here whilst
      // everyone else get's displayed
      // FIXME
      setTimeout(showCallout, 800);
    }
  });

  return (
    <Marker
      coordinate={{
        latitude: person.location.coordinates[0],
        longitude: person.location.coordinates[1]
      }}
      ref={markerRef}
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
  );
}

PersonMapMaker.propTypes = {
  person: PropTypes.object.isRequired,
  highlightPersonId: PropTypes.string
};

export default memo(PersonMapMaker);
