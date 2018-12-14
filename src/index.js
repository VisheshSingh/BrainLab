import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Logo/Logo";
import "tachyons";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Logo />
      {/*<Rank />
      <ImageLinkForm />*/}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
