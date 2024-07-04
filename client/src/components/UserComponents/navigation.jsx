import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./loginPage";

export const Navigation = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [open, setOpen] = useState(false);

  const handleNavclick = () => {
    if (isMobile) {
      const menuButton = document.querySelector(".navbar-toggle");
      menuButton.click();
      setShowLoginPage(true);
    }
  };

  const CheckIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    
    // Add the event listener when the component is mounted
    window.addEventListener("resize", CheckIsMobile);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", CheckIsMobile);
    };
  }, []);

  useEffect(() => {
    CheckIsMobile();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Login open={open} handleClose={handleClose} />
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1">
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              KRIPAS 
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  href="#about"
                  className="page-scroll"
                  onClick={handleNavclick}>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="page-scroll"
                  onClick={handleNavclick}>
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="page-scroll"
                  onClick={handleNavclick}>
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#team"
                  className="page-scroll"
                  onClick={handleNavclick}>
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="page-scroll"
                  onClick={handleNavclick}>
                  Contact
                </a>
              </li>
              <li>
                {/* Use a conditional rendering to show the login page when the button is clicked */}
                {showLoginPage ? (
                  <Login />
                ) : (
                  <a className="page-scroll">
                    <button onClick={handleOpen} className="login-button">
                      <i className="fa fa-user" />
                    </button>
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
