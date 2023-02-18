// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import AdvCountDownTimer from './components/advanceCounter';
import CountDownTimer from './components/countdownTimer';

function App() {
  return (
    <div className="App">
      <CountDownTimer/>
      {/* <AdvCountDownTimer/> */}
    </div>
  );
}

export default App;
