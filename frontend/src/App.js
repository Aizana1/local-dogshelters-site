import { useState, useEffect } from 'react'
import { Route } from 'react-router'
import { Navbar, Dashboard, Login, PetsList, Signup,Homestays,Clinics,  DogFriendlyPlaces,  HelpPage } from './components'
import Home from './pages/Home'
import axios from 'axios'
import Lost from './components/Lost'

function App() {
  // const [petsList, setPetsList] = useState([])
  const [homestays, setHomestaysList] = useState([])
  const [clinics, setClinics] = useState([])
  // const [user, setUser] = useState();

   return (
    <div className="App">
      <Navbar />

      <Route path="/" render={() => <Home />} exact />
      <Route path="/lostandfound" render={() => <Lost /> } />
      <Route path="/vetclinics" render={() => <Clinics clinics={clinics} />} />
      <Route path="/signup" render={() => <Signup />} />
      <Route path="/login" render={() => <Login />} />
      <Route path="/dashboard" render={() => <Dashboard />} />
      <Route path="/pets" render={() => <PetsList />} />
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
