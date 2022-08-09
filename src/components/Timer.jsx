import React from 'react';

function Timer({time}) {
  return (
    <p id="time_box" style={{ color: time <= 10 ? "red" : "white" }}>
        {time}
    </p>
  )
}

export default Timer;