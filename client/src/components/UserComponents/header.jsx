import React from "react";
import SliderComponent from "../../Ui-Components/Slider";

export const Header = (props) => {
  return (
    <header
      id="header"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}>
      <SliderComponent />
      <div className="overlay headerimage">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text">
              <h1 style={{color:"white"}}>
                {props.data ? props.data.title : "Loading"}
                <span></span>
              </h1>
              <p>{props.data ? props.data.paragraph : "Loading"}</p>
              <a
              style={{marginTop:"30px"}}
                href="#about"
                className="btn btn-custom btn-lg page-scroll">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
