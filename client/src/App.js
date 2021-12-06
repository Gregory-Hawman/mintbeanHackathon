import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import LandingPage from './components/landingPage';
import Canvas from './components/canvas';
import Gallery from './components/gallery';
import LoginSignupPage from './components/loginSignupPage';
import './css/App.css';

function App() {

  function draw(ctx, frameCount) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(150, 75, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
}  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
        <Route path='/canvas' element={ <Canvas draw={draw} /> } />
        <Route path='/gallery' element={ <Gallery /> } />
        <Route path='/login' element={ <LoginSignupPage /> } />
        <Route path='/register' element={ <LoginSignupPage /> }/>
      </Routes>
    </div>
  );
}

export default App;
