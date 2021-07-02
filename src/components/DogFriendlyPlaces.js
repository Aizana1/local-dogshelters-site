import React from 'react'
import MapSection from '../components/map/Map' // import the map here

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}
function DogFriendlyPlaces() {
  return (
    <div>
      <MapSection location={location} zoomLevel={17} /> {/* include it here */}

    </div>
  )
}

export default DogFriendlyPlaces
