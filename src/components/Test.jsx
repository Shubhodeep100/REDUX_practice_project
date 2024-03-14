import React, { useState, useEffect } from "react";

const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // This effect will run after every render
    console.log("Effect ran");
  });

  useEffect(() => {
    // This effect will only run once, after the initial render
    console.log("Initial effect ran");
  }, []);

  useEffect(() => {
    // This effect will run whenever the 'count' state changes
    console.log("Count changed:", count);
  }, [count]);

  useEffect(() => {
    // This effect will run whenever the 'message' state changes
    console.log("Message changed:", message);
  }, [message]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type something..."
      />
      <p>Message: {message}</p>
    </div>
  );
};

export default ExampleComponent;
