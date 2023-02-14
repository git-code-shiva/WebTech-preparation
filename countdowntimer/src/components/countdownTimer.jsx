import React, { useState } from "react";
import './countDown.css'

const CountDownTimer = () => {
  const [timeCount, setTimeCount] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  let interval;

  const startTimer=()=>{
    clearInterval(interval);

    let count = parseInt(timeCount);

    if(isNaN(count)){
        setCurrentTime("Invalid input");
        setTimeCount("");
        return;
    }
    else if(count <=0){
        setCurrentTime("0");
        setTimeCount("");
        return;
    }

    setCurrentTime(count);

    interval=setInterval(()=>{
        count--;
        setCurrentTime(count);

        if(count ===0){
            clearInterval(interval);
            setCurrentTime("Countdown finshed");
        }
    },1000);

    setTimeCount("");
  }

  return (
    <>
    <h1>Countdown Timer</h1>
    <div className="container">
      <input
        id="timeCount-inp"
        type="text"
        value={timeCount}
        onChange={(e) => setTimeCount(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? startTimer() : null)}
      />
      </div>

      <div id="show-timer">{currentTime===""?<p>Hit Enter to start the timer</p>:currentTime}</div>
      
    </>
  );
};
export default CountDownTimer;