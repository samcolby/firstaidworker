import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const GeolocationContext = React.createContext();

function GeolocationProvider(props) {
  const [location, setLocation] = useState();
  const [isUpdatingLocation, setIsUpdatingLocation] = useState(true);
  const [locationErrorMessage, setLocationErrorMessage] = useState("");

  useEffect(() => {
    getCurrentLocation();
  }, []);

  async function getCurrentLocation() {
    setIsUpdatingLocation(true);
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      setLocationErrorMessage("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
      maximumAge: 10000
    });
    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    });
    setIsUpdatingLocation(false);
  }

  const context = {
    location,
    isUpdatingLocation,
    getCurrentLocation,
    locationErrorMessage
  };

  return (
    <GeolocationContext.Provider value={context}>
      {props.children}
    </GeolocationContext.Provider>
  );
}

GeolocationProvider.propTypes = {
  children: PropTypes.object
};

function withGeolocation(Component) {
  return function GeolocationComponent(props) {
    return (
      <GeolocationContext.Consumer>
        {contexts => <Component {...props} {...contexts} />}
      </GeolocationContext.Consumer>
    );
  };
}

export default withGeolocation;
export { GeolocationProvider };
