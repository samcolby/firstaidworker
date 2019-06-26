import React, { Component } from "react";
import PropTypes from "prop-types";

const GeolocationContext = React.createContext();

class GeolocationProvider extends Component {
  static propTypes = {
    children: PropTypes.object
  };

  state = {
    coordinates: {
      latitude: 0,
      longitude: 0
    },
    isUpdatingCoordinates: true,
    getCurrentPosition: this.getCurrentPosition
  };

  constructor(props) {
    super(props);
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
  }

  componentDidMount() {
    this.getCurrentPosition();
  }

  getCurrentPosition() {
    this.setState(() => {
      return {
        isUpdatingCoordinates: true
      };
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

export default GeolocationContext;
export { GeolocationProvider };
