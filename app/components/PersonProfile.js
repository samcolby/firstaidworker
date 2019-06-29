import React, { memo } from "react";
import PropTypes from "prop-types";

import { Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { PersonHeaderCard, PersonProfileForm } from "../components";
import UpdatePerson from "../apis/UpdatePerson";

/**
 * React Pure Component to display
 * the profile page where the person's details
 * can be updated.
 * @param {Object} props - Standard react prop
 * @param {function} person - The person's details object
 *
 */
const PersonProfile = ({ person }) => {
  return (
    <UpdatePerson>
      {(update_worker, { data, loading, error }) => {
        if (error) return <Text>Error :(</Text>;

        return (
          <KeyboardAwareScrollView>
            <PersonHeaderCard person={person} />
            <PersonProfileForm person={person} updateWorker={update_worker} />
          </KeyboardAwareScrollView>
        );
      }}
    </UpdatePerson>
  );
};

PersonProfile.propTypes = {
  person: PropTypes.object.isRequired
};

export default memo(PersonProfile);
