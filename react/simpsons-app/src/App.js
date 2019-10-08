import React from 'react';

import Navbar from './Navbar/Navbar';
import QuoteCard from './QuoteCard/QuoteCard';

import Homer from './img/Homer_Simpson.png';
import Wiggum from './img/Chief_Wiggum.png';
import Burns from './img/Mr_Burns.png';
import Flanders from './img/Ned_Flanders.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <QuoteCard img={Homer} name="Homer Simpson" quote="Mmmmmh, doughnuts..."/>
        <QuoteCard img={Wiggum} name="Chief Wiggum" quote="Let him go, Lou!"/>
        <QuoteCard img={Burns} name="Mr Burns" quote="Eat Their Bones!"/>
        <QuoteCard img={Flanders} name="Ned Flanders" quote="Hi Diddly Ho!"/>
      </header>
    </div>
  );
}

export default App;
