import React from "react";

const ImageLinkForm = props => {
  const { onInputChange, onButtonClick } = props;
  return (
    <div>
      <p className="w-70 center f4">
        BrainLab is an intelligent face detection system which can detect faces
        in an image. Give it a try!
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            onChange={onInputChange}
            type="text"
            className="f4 pa2 w-70 center"
          />
          <button
            onClick={onButtonClick}
            className="link grow f4 ph3 pv2 dib white w-30 bg-light-purple"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
