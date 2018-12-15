import React, { Component } from "react";
import ReactDOM from "react-dom";
import Clarifai from "clarifai";
import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import "tachyons";
import Particles from "react-particles-js";

import "./styles.css";

// instantiate a new Clarifai app passing in your api key.
const app = new Clarifai.App({
  apiKey: "14faeb49b6f14e60832404136f708e60"
});

const particleoptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};
class App extends Component {
  state = {
    input: "",
    imageUrl: "",
    box: {}
  };

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  calculateBox = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  displayFaceBox = box => {
    console.log(box);
    this.setState({ box: box });
  };

  onButtonClick = () => {
    this.setState({
      imageUrl: this.state.input
    });
    // predict the contents of an image by passing in a url
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateBox(response)))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleoptions} />
        <Navbar />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonClick={this.onButtonClick}
        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
