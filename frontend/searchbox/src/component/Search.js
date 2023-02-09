import React, {useEffect, useState} from "react";
import "./Search.css";
import VoicePic from "../assets/Voice.png";
// import {useNavigate} from "react-router-dom"
import { redirect } from "react-router-dom";

function Search() {
  const [url, setUrl] = useState("")
  const [link, setLink] = useState(false)
  const [UrlData, setUrlData]= useState("")

  const Styles = {
    margin: "0 auto",
    padding: "10px",
    width: "50%",
    display: "flex",
    top: "3em",
    borderRadius: "50px",
    background: "#e0e0e0",
    boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
  };

  const inputStyles = {
    borderRadius: "15px",
  };



  const handleChange = (e)=>{
    setUrl(e.target.value)
    
  }
  console.log("url", url);
  const EnterUrl = (url)=>{
    console.log("url", url);
    
    setUrlData("https://www." + url +".com")
    setUrlData("http://www." + url +".com")
    setLink(true)
    // window.open(UrlData,"_")
  
    
}
useEffect(()=>{
  urlFunc()
},[UrlData])
  console.log("UrlDataout", UrlData);

const urlFunc =()=>{
  console.log("UrlDatafunctions", UrlData);
  window.open(UrlData, '_blank');
}
  console.log("Stroutside", UrlData);
  console.log("path", window.pathname);


  return (
    <div className="SearchBody">
      <h1 style={{ fontSize: "14em" }}>
        <strong>
          <span>
            <span className="g-blue">f</span>
            <span className="o-red">i</span>
            <span className="o-yellow">n</span>
            <span className="g-blue">d</span>
            <span className="l-green"> </span>
            <span className="o-red e-red">?</span>
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
          value={url}
          onChange={(e)=>handleChange(e)}
          onClick={()=>EnterUrl(url)}
        />
        <div className="input-group-append">
          <img src={VoicePic} alt="voice picture" width={50} height={50} />
        </div>
        {/* {link?<a href={UrlData}> text of the link </a> : <p>URL is wrong</p>} */}
      </div>
    </div>
  );
}

export default Search;
