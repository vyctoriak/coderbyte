import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Toggle() {
  const [toggleOn, setToggleOn] = useState(true);

  function handleClick() {
    return setToggleOn(!toggleOn);
  }

  return <button onClick={handleClick}>{toggleOn ? 'ON' : 'OFF'} </button>;
}

ReactDOM.render(<Toggle />, document.getElementById('root'));
