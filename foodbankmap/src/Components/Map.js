import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const splitData = (lat_long) => {
  let splitLL = lat_long.split(",");
  let lat = Number(splitLL[0]);
  let long = Number(splitLL[1]);
  return {
    lat: lat,
    lng: long,
  };
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={7}
        style={mapStyles}
        initialCenter={{
          lat: 56.8642,
          lng: -4.2518,
        }}
      >
        {this.props.data.map((foodbank) => (
          <Marker
            onClick={this.onMarkerClick}
            position={splitData(foodbank.lat_lng)}
            name={foodbank.name}
            address={foodbank.address}
            telephone={foodbank.telephone}
            email={foodbank.email}
            website={foodbank.telephone}
          />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCEWUYwaHBwMNfdk4biEK-CMwoKQNhgvKA",
})(MapContainer);
