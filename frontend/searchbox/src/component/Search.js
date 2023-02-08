import React from "react";
import "./Search.css";
import VoicePic from "../assets/Voice.png";

function Search() {
  const Styles = {
    margin: "0 auto",
    padding: "10px",
    width: "50%",

    // border: "1px solid black",
    display: "flex",
    top: "3em",
    borderRadius: "50px",
    background: "#e0e0e0",
    boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
  };

  const inputStyles = {
    borderRadius: "15px",
  };

  return (
    <div className="SearchBody">
      <h1 style={{ fontSize: "14em" }}>
        <strong>
          <span>
            <span class="g-blue">G</span>
            <span class="o-red">o</span>
            <span class="o-yellow">o</span>
            <span class="g-blue">g</span>
            <span class="l-green">l</span>
            <span class="o-red e-red">e</span>
          </span>
        </strong>
      </h1>
      <div className="input-group mb-3" style={Styles}>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          style={inputStyles}
        />
        <div className="input-group-append">
          <img src={VoicePic} alt="voice picture" width={50} height={50} />
        </div>
      </div>
    </div>
  );
}

export default Search;
