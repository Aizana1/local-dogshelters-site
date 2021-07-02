import { useState, useEffect } from 'react'
import { Route } from 'react-router'
import { Navbar, Dashboard, Login, PetsList, Signup } from './components'
import Home from './pages/Home'
import axios from 'axios'
import Homestays from './components/Homestays'
import Clinics from './components/Clinics'
import DogFriendlyPlaces from './components/DogFriendlyPlaces'
import HelpPage from './components/HelpPage'

function App() {
  const [petsList, setPetsList] = useState([])
  const [homestays, setHomestaysList] = useState([])
  const [clinics, setClinics] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/pets.json')
      .then(({ data }) => setPetsList(data.pets))
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:3000/homestays.json')
      .then(({ data }) => setHomestaysList(data.homestays))
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:3000/clinics.json')
      .then(({ data }) => setClinics(data.clinics))
  }, [])

  return (
    <div className="App">
      <Navbar />

      <Route path="/" render={() => <Home />} exact />
      <Route path="/vetclinics" render={() => <Clinics clinics={clinics} />} />
      <Route path="/signup" render={() => <Signup />} />
      <Route path="/login" render={() => <Login />} />
      <Route path="/dashboard" render={() => <Dashboard />} />
      <Route path="/pets" render={() => <PetsList pets={petsList} />} />
      <Route
        path="/homestay"
        render={() => <Homestays homestays={homestays} />}
      />
      <Route path="/places" render={() => <DogFriendlyPlaces />} />
      <Route path="/help" render={() => <HelpPage />} />
    </div>
  )
}

export default App
