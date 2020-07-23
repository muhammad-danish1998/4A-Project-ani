import React, { useRef } from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import house from './house.gif'
import parot from './parot.gif'

function App() {
  // const parot = useRef(null);
  const  parent  = useWebAnimations({
    keyframes: [
      {transform:"translate(0,0)"},
      {transform:"translate(400px,0px)"},
      {transform:"translate(1000px,-400px)"},
      

    ],
    timing: {
      // delay: 1000, // Start with a 500ms delay
      duration: 6000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      // direction: "alternate", // Run the animation forwards and then backwards
      // easing: "ease-in-out", // Use a fancy timing function
    },
  // onReady: ({ playState, animate, animation }) => {
  //   // Triggered when the animation is ready to play (Google Chrome: available in v84+)
  // },
  // onUpdate: ({ playState, animate, animation }) => {
  //   // Triggered when the animation enters the running state or changes state
  // },
  // onFinish: ({ playState, animate, animation }) => {
  //   // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
  // },
  // More useful options...
  });
  const  parent2  = useWebAnimations({
    keyframes: [
      {transform:"translate(0,0)"},
      {transform:"translate(400px,-20px)"},
      {transform:"translate(1200px,0)"},
      

    ],
    timing: {
      // delay: 5000, // Start with a 500ms delay
      duration: 6000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      // direction: "alternate", // Run the animation forwards and then backwards
      // easing: "ease-in-out", // Use a fancy timing function
    },
  // onReady: ({ playState, animate, animation }) => {
  //   // Triggered when the animation is ready to play (Google Chrome: available in v84+)
  // },
  // onUpdate: ({ playState, animate, animation }) => {
  //   // Triggered when the animation enters the running state or changes state
  // },
  // onFinish: ({ playState, animate, animation }) => {
  //   // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
  // },
  // More useful options...
  });










  return (
    <>
      <div id="container" >
        
        <div id='hourse' >
          <img src={house} ref ={parent2.ref} />
        </div>
        
        <div id ='parot'  >
        <img src={parot}  ref ={parent.ref} />
        </div>

      </div>


    </>
  );
}

export default App;
