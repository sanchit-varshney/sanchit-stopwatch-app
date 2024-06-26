import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(null);
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
    } else if (!isActive) {
      setIsActive(true);
      setIsPaused(false);
      setTime(0);
      increment.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setIsPaused(true);
    setElapsedTime(time);
  };

  const handleReset = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setIsPaused(true);
    setTime(0);
    setElapsedTime(null);
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time-display">{time}s</div>
      <div className="buttons">
        <button className="start-pause" onClick={handleStartPause}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="stop" onClick={handleStop}>Stop</button>
        <button className="reset" onClick={handleReset}>Reset</button>
      </div>
      {elapsedTime !== null && (
        <div className="elapsed-time">
          Elapsed Time: {elapsedTime}s
        </div>
      )}
    </div>
  );
};

export default Stopwatch;
