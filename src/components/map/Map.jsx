//AIzaSyBdAhSN7ZNRowiKm7nWx9EM2pZMqHyCE5s 
import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'

import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import './map.css'

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Dog - Friendly заведения и места на карте</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBdAhSN7ZNRowiKm7nWx9EM2pZMqHyCE5s' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map
