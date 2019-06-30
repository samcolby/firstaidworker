import React, { memo } from "react";
import PropTypes from "prop-types";

import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { Image } from "react-native-elements";

import { COLORS } from "../Constants";

import env from "../../env.json";

const STATIC_MAP_URL = "https://maps.googleapis.com/maps/api/staticmap";
const API_KEY = env.static_maps_key;

/**
 * React Pure Component to display
 * a static image of the person's location
 * @param {Object} props - Standard react props
 * @param {number} latitude
 *    The latitude of the center of the map
 * @param {number} longitude
 *    The longitude of the center of the map
 */
function StaticMap({ latitude, longitude, onPress }) {
  const { width } = Dimensions.get("window");

  const url = [
    STATIC_MAP_URL,
    `?center=${latitude},${longitude}`,
    "&zoom=16",
    `&size=${width}x${width}`,
    "&maptype=roadmap",
    `&markers=color:green%7C${latitude},${longitude}`,
    `&key=${API_KEY}`
  ].join("");

  return (
    <TouchableOpacity testID="staticMapLink" onPress={onPress}>
      <Image
        testID="staticMapImage"
        source={{ uri: url }}
        style={{ width: width, height: width, marginTop: 20 }}
        placeholderStyle={styles.placeholderStyle}
        PlaceholderContent={
          <ActivityIndicator size="large" color={COLORS.TAB_HINTS} />
        }
      />
    </TouchableOpacity>
  );
}

StaticMap.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  onPress: PropTypes.func
};

const styles = StyleSheet.create({
  placeholderStyle: { backgroundColor: COLORS.BACKGROUND }
});

export default memo(StaticMap);
