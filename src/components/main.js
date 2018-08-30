import React from 'react';
import ScrollDown from './scrollDown';
import TheRestaurant from './theRestaurant';
import TheBar from './theBar';
import Footer from './footer';

function StartPageMain() {
  return (

          <div id="mainWrapper">
            <main id="mainContent">
              <div id="restaurntImage">
                <img src={require("../images/juanabar3.png")}/>
              </div>
              <div className="descriptionBox">
                <h2>Welcome to Juana La Loca</h2>
                <p>Juana La Loca already being hailde as Bogotá's most beautiful,
                it comes as no surprise to hear artchitect Isay Weinfield's work is an enthusiastically
                received in Colombia as it is in his home country of Brazil.
                Centrally located on a main strip between teo of the city's most buzzing districts - Zona T and Parque 93 -
                the restaurant can be found on the third floor of an upscale mixed-use complex.
                </p>
              </div>
              <ScrollDown />
              <TheRestaurant />
              <ScrollDown />
              <TheBar />
            </main>
            <Footer />
          </div>
        
        );   
};

export default StartPageMain;