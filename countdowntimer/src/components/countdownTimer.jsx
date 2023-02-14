import React, { useEffect, useState } from "react";
import "./countDown.css";

const CountDownTimer = () => {
  const [timeCount, setTimeCount] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [intervalId, setIntervalId] = useState(null);

  // let interval;

  const startTimer = () => {
    clearInterval(intervalId);

    let count = parseInt(timeCount);

    if (isNaN(count)) {
      setCurrentTime("Invalid input");
      setTimeCount("");
      return;
    } else if (count <= 0) {
      setCurrentTime("0");
      setTimeCount("");
      return;
    }

    setCurrentTime(count);

    const id = setInterval(() => {
      count = count - 1;
      setCurrentTime(count);

      if (count === 0) {
        clearInterval(id);
        setCurrentTime("Countdown Finished");
      }
    }, 1000);
    
    setIntervalId(id);
    setTimeCount("");
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <>
      <h1>Countdown Timer</h1>
      <div className="container">
        <input
          placeholder="Enter number here"
          id="timeCount-inp"
          type="text"
          value={timeCount}
          onChange={(e) => setTimeCount(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? startTimer() : null)}
        />
      </div>

      <div id="show-timer">
        {currentTime === "" ? <p>Hit Enter to start the timer</p> : currentTime}
      </div>
    </>
  );
};
export default CountDownTimer;
