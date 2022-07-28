import React from 'react';
import './App.css';

import { 
  Navbar,
  SlideshowHeader,
  RentalList
} 
from './components';

import Sutton from './assets/sutton.jpeg';
import Dreamland from './assets/dreamland.jpg'
import Southend from './assets/Southend.jpeg'
import Baumann from './assets/Baumann.jpeg'
import Berrylane from './assets/Berrylane.jpeg'
import Yorkplace from './assets/Yorkplace.jpeg'
import Parsons from './assets/ParsonsPads.jpeg'
import Sundarji from './assets/Sundarji.jpeg'
import EastStreet from './assets/90thStreet.jpg'
import VinylVillas from './assets/VinylVillas.jpg'

const App = () => {
  return (
    <div>
        <Navbar />
        <SlideshowHeader />
        <div className="rental_text">
            <h1>Rental Buildings</h1>
        </div>
        <RentalList image01={Sutton} building01Text="One Sutton Place" building01sub="SUTTON PLACE" buttonLabel="See Apartments"
        image02={Dreamland} building02Text="Dreamland Apartments" building02sub="ASTORIA, QUEENS"/>
        <RentalList image01={Baumann} building01Text="Baumann Living" building01sub="MURRAY HILL" buttonLabel="See Apartments"
        image02={Southend} building02Text="South End Inc." building02sub="COBBLE HILL, BKLYN"/>
        <RentalList image01={Berrylane} building01Text="Berry Lane Corporation" building01sub="BROOKLYN HEIGHTS" buttonLabel="See Apartments"
        image02={Yorkplace} building02Text="York Place Apartments" building02sub="BROOKLYN HEIGHTS"/>
        <RentalList image01={Sundarji} building01Text="Sundarji Studios" building01sub="LOWER EAST SIDE" buttonLabel="See Apartments"
        image02={Parsons} building02Text="Parsons Pads" building02sub="CLINTON HILL, BKLYN"/>
        <RentalList image01={EastStreet} building01Text="115 East 90th Street" building01sub="UPPER EAST SIDE" buttonLabel="See Apartments"
        image02={VinylVillas} building02Text="Vinyl Villas" building02sub="CHELSEA"/>


    </div>
  )
}

export default App;