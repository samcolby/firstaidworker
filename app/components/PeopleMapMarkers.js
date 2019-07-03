import React, { memo } from "react";
import PropTypes from "prop-types";

import _remove from "lodash/remove";

import { PersonMapMarker } from "../components";

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
function PeopleMapMarkers({ people, highlightPersonId }) {
  // if a person is highlighted we need to display them even
  // if they are not in the first numToDisplay people
  // we also display them last which helps
  // with issues using marker.showCallout()

  // Take a copy of people as _remove mutates
  let peopleCopy = [...people];

  let personHighlighted;
  let numberToDisplay = 20;
  if (highlightPersonId) {
    personHighlighted = _remove(peopleCopy, ["id", highlightPersonId]);
    numberToDisplay--;
  }

  return (
    <>
      {peopleCopy.slice(0, numberToDisplay).map((person, i) => {
        return <PersonMapMarker person={person} key={person.id} />;
      })}
      {personHighlighted && (
        <PersonMapMarker
          person={personHighlighted[0]}
          highlightPersonId={highlightPersonId}
          key={highlightPersonId}
        />
      )}
    </>
  );
}

PeopleMapMarkers.propTypes = {
  people: PropTypes.array.isRequired,
  highlightPersonId: PropTypes.string
};

export default memo(PeopleMapMarkers);
