import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const increment = useRef(null);

  const handleStartPause = () => {
    if (isActive && isPaused) {
      setIsPaused(false);
      increment.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (isActive && !isPaused) {
      clearInterval(increment.current);
      setIsPaused(true);
    } else {
      setIsActive(true);
      setIsPaused(false);
      increment.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setIsPaused(true);
  };

  const handleReset = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setIsPaused(true);
    setTime(0);
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time-display">{time}s</div>
      <div className="buttons">
        <button className="start-pause" onClick={handleStartPause}>
          {isActive && !isPaused ? 'Pause' : 'Start'}
        </button>
        <button className="stop" onClick={handleStop}>Stop</button>
        <button className="reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
