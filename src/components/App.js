import React, {Component, useState} from "react";
import '../styles/App.css';
function App() {
  const [booli, setbooli] = useState(false);
  const handleButton = () => {
    setbooli(true);
  };
  return (
    <div id="main">
      {booli === false ? (
        <button id="click" onClick={handleButton}>
          button
        </button>
      ) : (
        <p id="para">
          {
            "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
          }
        </p>
      )}
    </div>
  );
}
export default App;
