import React from "react";

const FaceRecognition = props => {
  const { imageUrl } = props;
  return (
    <div className="ma2">
      <div className="mt2">
        <img src={imageUrl} alt="" width="500px" height="auto" />
      </div>
    </div>
  );
};

export default FaceRecognition;
