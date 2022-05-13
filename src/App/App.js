import React, { useState } from "react";
import PollenInformation from "../components/PollenInformation";
import RiskLevelSearch from "../components/RiskLevelSearch";
import Info from "../components/Info";

import "./style.css";

const App = () => {
  const [risk, setRisk] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getRisk = () => {
    fetch(
      `https://api.ambeedata.com/latest/pollen/by-place?place=${searchTerm}`,
      {
        method: "GET",
        headers: {
          "x-api-key": process.env.REACT_APP_SECRET_KEY,
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setRisk(res.data);
      })
      .catch((err) => {
        console.error("An error occured", err);
      });
  };

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const onClickHandler = () => {
    getRisk();
  };

  return (
    <div className="App">
      <Info />
      <div className="form">
        <RiskLevelSearch
          onChange={onChangeHandler}
          value={searchTerm}
          onClick={onClickHandler}
        />
      </div>
      <div className="day">
        <h2>{searchTerm}</h2>
        <PollenInformation risk={risk} />
      </div>
    </div>
  );
};

export default App;
