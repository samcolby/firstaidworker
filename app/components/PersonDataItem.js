import React, { memo } from "react";
import PropTypes from "prop-types";

import { ListItem } from "react-native-elements";

import PersonDataItemLeftElement from "./PersonDataItemLeftElement";

function PeopleDataItem(props) {
  const { value } = props;
  return (
    <ListItem
      leftElement={<PersonDataItemLeftElement {...props} />}
      title={value}
    />
  );
}

PeopleDataItem.propTypes = {
  icon: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default memo(PeopleDataItem);
