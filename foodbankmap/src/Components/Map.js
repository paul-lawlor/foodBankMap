import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Modal";
import axios from "axios";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

//defining the colouring for the map in an object
const mapColours = [
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#AED1F0",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#f2f2f2",
      },
    ],
  },
];

const splitData = (lat_long) => {
  let splitLL = lat_long.split(",");
  let lat = Number(splitLL[0]);
  let long = Number(splitLL[1]);
  return {
    lat: lat,
    lng: long,
  };
};

const getNeedsExcess = (lat_lng, requestType) => {
  const API_URL =
    "https://www.givefood.org.uk/api/2/foodbanks/search/?lat_lng=" + lat_lng;
  axios.get(API_URL).then((response) => {
    if (requestType === "needs") {
      console.log()
      return response.data[0].needs.needs.split("\n");
    } else if (requestType === "excess") {
      // console.log(response.data[0].needs.excess)
      return response.data[0].needs.excess === null
        ? ["N/A"]
        : response.data[0].needs.excess.split("\n");
    }
  });
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

  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: mapColours,
    });
  }

  render() {
    return (
      <>
        {/* MAP COMPONENT */}
        <Map
          google={this.props.google}
          zoom={7}
          //removes default UI and sets terrain to ON by default
          disableDefaultUI="true"
          mapTypeId={this.props.google.maps.MapTypeId.TERRAIN}
          style={mapStyles}
          // Gets map style ⤵
          onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
          initialCenter={{
            lat: 56.816922,
            lng: -4.18265,
          }}
        >
          {/* MAPPING EACH FOODBANK TO AN INDIVIDUAL MARKER ON THE MAP */}
          {this.props.data.map((foodbank) => (
            <Marker
              onClick={this.onMarkerClick}
              position={splitData(foodbank.lat_lng)}
              name={foodbank.name}
              address={foodbank.address.replace(/\r/g, ", ")}
              closed={foodbank.closed}
              telephone={foodbank.phone}
              email={foodbank.email}
              website={foodbank.urls.homepage}
              needs={getNeedsExcess(foodbank.lat_lng, "needs")}
              excess={getNeedsExcess(foodbank.lat_lng, "excess")}
            />
          ))}

          {/* Info Window - Desktop*/}
          {/* <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <h1>{this.state.selectedPlace.name}</h1>
          </InfoWindow> */}

          {/* Modal - Mobile */}
          <Modal
            show={this.state.showingInfoWindow}
            onShow={console.log(this.state.selectedPlace)}
            onHide={this.onClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>{this.state.selectedPlace.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{this.state.selectedPlace.address}</p>
              <p>Tel: {this.state.selectedPlace.telephone}</p>
              <p>
                <a href={this.state.selectedPlace.website}>Website</a>
              </p>

              <div className="d-flex m-1">
                {/* Needs mapped to list */}
                <div>
                  <ul>
                    needs
                    <li>Items here</li>
                  </ul>
                </div>

                {/* Excess mapped to list*/}
                <div>
                  <ul>
                    Excess
                    {this.state.selectedPlace.needs?.map((item) => (
                      <li>{item}</li>
                    ))}
                    <li>Items here</li>
                  </ul>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCEWUYwaHBwMNfdk4biEK-CMwoKQNhgvKA",
})(MapContainer);
