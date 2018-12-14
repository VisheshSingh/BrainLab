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
    imageUrl: ""
  };

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  onButtonClick = () => {
    this.setState({
      imageUrl: this.state.input
    });
    // predict the contents of an image by passing in a url
    app.models.predict(Clarifai.COLOR_MODEL, this.state.input).then(
      function(response) {
        console.log(response);
      },
      function(err) {
        console.error(err);
      }
    );
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
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
