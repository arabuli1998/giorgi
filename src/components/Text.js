
import React, { useState, useEffect } from 'react';
import Clock from "./Clock";
function Text() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You cliked ${count} times`;
  });

  return (
    <div>
        <Clock/>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}
export default Text;
