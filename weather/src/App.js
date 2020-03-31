import React, { useState, useEffect } from "react";
import TempCard from "./components/Tempcard/main";
import "./App.css";

function App() {
  const [_Query, setQuery] = useState("Edmonton, ca");
  const [_Weather, setWeather] = useState({
    _City: null,
    _Temp: null,
    _Situation: null,
    _Country: null
  });

  // const [_City, setCity] = useState("", "");
  // const [_Temp, setTemp] = useState("");
  // const [_Stuation, setSituation] = useState("");
  // const [_Country, setCountry] = useState("");

  const data = async q => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=1cb1ef7ea4100f1b3f91c16842588629`
    );
    const resJSNO = await apiRes.json();
    return resJSNO;
  };
  //
  const searchItems = e => {
    e.preventDefault();
    data(_Query).then(res => {
      setWeather({
        _Temp: res.main.temp,
        _City: res.name,
        _Country: res.sys.country,
        _Situation: res.weather[0].main
      });
    });
  };

  useEffect(() => {
    data(_Query).then(res => {
      setWeather({
        _Temp: res.main.temp,
        _City: res.name,
        _Country: res.sys.country,
        _Situation: res.weather[0].main
      });
    });
  }, []);

  return (
    <div className="App">
      <TempCard
        _temp={_Weather._Temp}
        _situation={_Weather._Situation}
        _city={_Weather._City}
        _country={_Weather._Country}
      />
      <form>
        <input value={_Query} onChange={e => setQuery(e.target.value)} />
        <button onClick={e => searchItems(e)}> Search </button>
      </form>
    </div>
  );
}

export default App;

/* <TempCard
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
      /> */
