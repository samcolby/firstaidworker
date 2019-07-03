import React, { Component } from "react";
import PropTypes from "prop-types";

const GeolocationContext = React.createContext();

class GeolocationProvider extends Component {
  static propTypes = {
    children: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.getCurrentPosition = this.getCurrentPosition.bind(this);

    this.state = {
      coordinates: {
        latitude: 0,
        longitude: 0
      },
      isUpdatingCoordinates: true,
      getCurrentPosition: this.getCurrentPosition
    };
  }

  componentDidMount() {
    this.getCurrentPosition();
  }

  getCurrentPosition(fnCallback) {
    this.setState(() => {
      return { isUpdatingCoordinates: true };
    });
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState(() => {
          return {
            coordinates: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            },
            isUpdatingCoordinates: false
          };
        });
        if (fnCallback) fnCallback();
      },
      error => {
        throw error;
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <GeolocationContext.Provider value={this.state}>
        {this.props.children}
      </GeolocationContext.Provider>
    );
  }
}

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
