import React from "react";
import { Link } from "react-router-dom";

const LandingPageContainer = (props) => {
  const mascot = "assets/images/logo.png";
  const video1 = "assets/images/mock-video1.gif";
  const mobilemap = "assets/images/mobile-map.png";
  const mobilelog = "assets/images/mobile-logs.png";
  const mobilemetrics = "assets/images/mobile-metrics.png";
  const screenshot = "assets/images/desktop.png";

  return (
    <div>
      <div id="landing-page-container">
        <img src="assets/images/logo.png" className="landing-logo" />

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
            <img src="assets/images/mobile-map.png" className="screen-shot-mobile" />
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
