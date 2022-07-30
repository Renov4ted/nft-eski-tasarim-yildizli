import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

export default function SuperRare() {


  const images = [
    { url: "https://cdn.discordapp.com/attachments/996719534390128760/996719587284488192/1.png" },
    { url: "" },
    { url: "" },
    { url: "" },
    { url: "" },
    { url: "" },
    { url: "" },
  ];
  const images2 = [
    { url: "https://cdn.discordapp.com/attachments/996719534390128760/996719587284488192/1.png" },
    { url: "" },
    { url: "" },
    { url: "" },
    { url: "" },
    { url: "" },
    { url: "" },
  ];



  const App = () => {
    return (
      <div>
      <div className="sliderParent sliderParent--fit"> 
        <div className="sliders">
          <SimpleImageSlider
            style={{
              // marginLeft: 270,
              marginBottom: 20
            }}
            width={500}
            height={500}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
       
                 
          <div className="sliders" >
          <SimpleImageSlider
            style={{
              // marginLeft: 270,
              marginBottom: 20
            }}
            width={500}
            height={500}
            images={images2}
            showBullets={true}
            showNavs={true}
          />

        </div>
          <br/>    
      </div>
      
  
  
  </div>

    );
  }

  return (
    <div className="" style={{
      position: "relative",
      zIndex: 3
    }}>

      <App />

 
    </div>
  );
}