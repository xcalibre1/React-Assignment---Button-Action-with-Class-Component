import React, { useState } from "react";
import "./styles.css";
function App() {
  const [para, setPara] = useState(false);
  function clickHandler() {
    setPara(true);
  }

  function hideParagraph() {
    if (para) {
      return (
        <p id="para">
          {"Hello, I've learnt to use the full-stack evaluation tool. This makesme so happy"}
        </p>
      );
    } else {
      return (
        <div id="main">
          <button id="click" onClick={clickHandler}>
            click me
          </button>
        </div>
      );
    }
  }
  return <div id="para">{hideParagraph()}</div>;
}
export default App;
