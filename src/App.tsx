import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const handleSubtract = () => {
    setCounter(counter - 1);
  };
  
  const handleAdd = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Hello world from Honduras.</h1>
      <br/>
      <p>This repository contains UNCERTAINTY.</p> 
      <p>I know I want to do something here, but still do not know what.</p>
      <br/>
      <p>Meanwhile, a counter: </p>
      <button onClick={handleSubtract}>-</button>
      {` ${counter} `}
      <button onClick={handleAdd}>+</button>
    </>
  );
}

export default App;
