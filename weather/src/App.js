import React, { useState } from "react";
import TempCard from "./components/Tempcard/main";
import "./App.css";

function App() {
  const [city, setCity] = useState("Edmonton", "ca");
  const [_temp, setTemp] = useState("");
  const [stuation, setSituation] = useState("");
  const [country, setCountry] = useState("");
  const data = async () => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${setCity}&units=metric&APPID=1cb1ef7ea4100f1b3f91c16842588629`
    );
    const resJSNO = await apiRes.json();
    return resJSNO;
  };
  //
  const searchItems = e => {
    e.preventDefault();

    data().then(res => {
      setTemp(res.main.temp);
    });
  };
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

      <form>
        <input value={city} onChange={e => setCity => e.target.value} />

        <button onClick={e => searchItems(e)}> Search </button>
      </form>
    </div>
  );
}

export default App;
