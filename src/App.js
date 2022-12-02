import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setdisplayMessage] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setdisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="App">
      <div className="text">
        <div>
          {displayMessage && <div>Break time! New session start in:</div>}
        </div>
      </div>
      <div className="clock">
        {timerMinutes}:{timerSeconds}
      </div>
    </div>
  );
}
