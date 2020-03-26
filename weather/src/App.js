import React from "react";
import TempCard from "./components/Tempcard/main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TempCard temp={-12} />
      <TempCard temp={10} />
      <TempCard temp={25} />
    </div>
  );
}

export default App;
