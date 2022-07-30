import React from "react";
import home from "../assets/home.png";
export default function Home() {
  return (
    <div style={{
      position: "relative",
      zIndex: 3
    }}  className="home">
      <div  className="container ">
        <div  className="content">
          <p  className="sub-title ">Welcome to Lucky Pandas' World</p>
          <h1 className="title neonText">Lucky Pandas is a collection of 999 1/1 NFTs. We welcome to you to the land of luck.</h1>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live.
          </p>
          <br/>
          
        </div>
        
        {/* <div className="image-container">
        <img className="image" src={home} alt="home image"  />

          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
