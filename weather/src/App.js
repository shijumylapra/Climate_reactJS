import React from "react";
import TempCard from "./components/Tempcard/main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TempCard temp="5" />
      <TempCard temp="20" />
    </div>
  );
}

export default App;
