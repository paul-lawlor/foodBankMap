import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Map, GoogleApiWrapper, Marker} from "google-maps-react";

// Map Colours object defines colours of Google Map
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

// Split Data splits lattitude and longitude
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

  // Set map colours
  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: mapColours,
    });
  }

  render() {
    return (
      <>
        {/* Google Map Component */}
        <Map
          google={this.props.google}
          zoom={6.3}
          minZoom={6.3}
          initialCenter={{
            lat: 56.659406,
            lng: -4.011214,
          }}
          mapTypeId={this.props.google.maps.MapTypeId.TERRAIN}
          className="w-75"

          //removes default UI and sets terrain to ON by default
          disableDefaultUI="true"

          // Get map colours
          onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
        >

          {/* Map each foodbank location to a marker on the map */}
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
              needs={foodbank.needs}
              excess={foodbank.excess}
            />
          ))}

          {/* Modal Pop-up */}
          <Modal show={this.state.showingInfoWindow} onHide={this.onClose} onShow={() => {
            console.log(this.state.selectedPlace.needs)
          }}>

            <Modal.Header closeButton>
              <Modal.Title className="fs-2">{this.state.selectedPlace.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>

            {/* Information */}
            <div style={{"border-bottom":"solid #dddddd 1px","margin-left":"-16px","padding-left":"16px","margin-right":"-16px","padding-right":"16px"}} className="mb-3">
              <p style={{"font-weight":"600"}}>{this.state.selectedPlace.address}</p>

              <p className="mb-0 d-flex">
                <p style={{"font-weight":"500"}} className="m-0 me-1">Tel:</p>{this.state.selectedPlace.telephone}
              </p>

              <p className="d-flex">
                <p style={{"font-weight":"500"}} className="m-0 me-1">Email:</p>{this.state.selectedPlace.email}
              </p>
            </div>

            {/* Needs & Excess */}
            <div className="d-flex m-1 justify-content-evenly">

              <div className="w-50 mx-2">
                <h5 className="mb-2">Requests</h5>
                {this.state.selectedPlace.needs?.map((item) => (
                  <p className="mb-0"><i className="bi-check-circle text-success me-1"></i>{item}</p>
                ))}
              </div>

              <div className="w-50 mx-2">
                <h5 className="mb-2">Excess</h5>
                {this.state.selectedPlace.excess?.map((item) => (
                  <p className="mb-0"><i className="bi-x-circle text-danger me-1"></i>{item}</p>
                ))}
              </div>

            </div>
            </Modal.Body>

            <Modal.Footer>
              <a href={this.state.selectedPlace.website} className="btn btn-primary">Visit Website</a>
            </Modal.Footer>

          </Modal>
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCEWUYwaHBwMNfdk4biEK-CMwoKQNhgvKA",
})(MapContainer);
