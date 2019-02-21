import React from "react";

import Particles from 'react-particles-js';
import './space.css';

const Space = () => {

  // shouldComponentUpdate = () => {
  //   return false;
  // }

  // render = () => {
    const starsStyle = {
      width: '100vw',
      height: '100vh',
      position: 'fixed'
    };

    return (
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 200,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              }
            },
            "opacity": {
              "value": 1,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 2,
                "size_min": 0.3,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
            },
            "move": {
              "enable": false
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": false
              },
              "onclick": {
                "enable": false
              },
              "resize": true
            }
          },
        }}
        style={starsStyle}
      />
    );
 // }

}

export default Space;
