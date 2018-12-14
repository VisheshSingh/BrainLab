import React from "react";

const FaceRecognition = props => {
  const { imageUrl } = props;
  return (
    <div className="ma2">
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default FaceRecognition;
