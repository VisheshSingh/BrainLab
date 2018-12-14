import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt  br2 shadow-2"
        options={{ max: 50 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <span role="img" aria-label="alien">
            <img className="pt2" src={brain} alt="Brain Lab logo" />
          </span>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
