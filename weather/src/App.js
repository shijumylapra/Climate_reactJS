import React from "react";
import TempCard from "./components/Tempcard/main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TempCard
        _temp={-12}
        _situation="Clear"
        __city="Sydny"
        __country="Australia"
      />
      <TempCard
        _temp={-10}
        _situation="Clouds"
        __city="Edmonton"
        __country="Canada"
      />
      <TempCard
        _temp={15}
        _situation="Dust"
        __city="London"
        __country="United Kindom"
      />
      <TempCard _temp={7} _situation="Hail" __city="New York" __country="USA" />
      <TempCard
        _temp={26}
        _situation="Fog"
        __city="New Delhi"
        __country="India"
      />
    </div>
  );
}

export default App;
