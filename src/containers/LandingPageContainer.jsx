import React from "react";
import { Link } from "react-router-dom";

const LandingPageContainer = (props) => {
  const mascot = "../assets/logo.png";
  const video1 = "../assets/mock-video1.gif";
  const mobilemap = "../assets/mobile-map.png";
  const mobilelog = "../assets/mobile-logs.png";
  const mobilemetrics = "../assets/mobile-metrics.png";
  const screenshot = "../assets/desktop.png";
  // path.resolve(__dirname, "../assets/desktop.png")
  return (
    <div>
      <div id="landing-page-container">
        <img src={mascot} className="landing-logo" />

        <p>An amazing app that blows socks off of seasoned developers.</p>
        <div className="button-flex-wrapper">
          <Link to={"/auth"}>
            <button id="get-started-button" className="primary-button">
              Get Started
            </button>
          </Link>
        </div>

        <div id="landing-page-flex">
          {/* <BouncingDotsLoader /> */}
          <div className="info-card-wrapper">
            <div className="info-card">
              <h1>STUFF</h1>Another peek into the amazing world of our developer mindsAnother peek into the amazing
              world of our developer mindsAnother peek into the amazing world{" "}
            </div>
            <div className="info-card">
              <h1>ABOUT</h1>Another peek into the amazing world of our developer mindsAnother peek into the amazing
              world of our developer mindsAnother peek into the amazing world{" "}
            </div>
            <div className="info-card">
              <h1>THINGS</h1>Another peek into the amazing world of our developer mindsAnother peek into the amazing
              world of our developer mindsAnother peek into the amazing world{" "}
            </div>
          </div>

          <div className="info-card-wrapper">
            <img src={screenshot} className="screen-shot" />
            <img src={mobilemap} className="screen-shot-mobile" />
            <img src={mobilemetrics} className="screen-shot-mobile" />
            <img src={mobilelog} className="screen-shot-mobile" />
          </div>

          <p className="landing-card">
            Another peek into the amazing world of our developer mindsAnother peek into the amazing world of our
            developer mindsAnother peek into the amazing world of our developer mindsAnother peek into the amazing world
            of our developer mindsAnother peek into the amazing world of our developer mindsAnother peek into the
            amazing world of our developer mindsAnother peek into the amazing world of our developer mindsAnother peek
            into the amazing world of our developer mindsAnother peek into the amazing world of our developer
            mindsAnother peek into the amazing world of our developer mindsAnother peek into the amazing world of our
            developer mindsAnother peek into the amazing world of our developer mindsAnother peek into the amazing world
            of our developer mindsAnother peek into the amazing world of our developer mindsAnother peek into the
            amazing world of our developer mindsAnother peek into the amazing world of our developer mindsAnother peek
            into the amazing world of our developer minds
          </p>
        </div>
      </div>
    </div>
  );
};
export default LandingPageContainer;
