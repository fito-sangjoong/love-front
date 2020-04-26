import React from "react";
import "./App.css";
import Main from "./components/Main";
import AppBar from "./components/AppBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        <Main />
      </div>
    );
  }
}

export default App;
