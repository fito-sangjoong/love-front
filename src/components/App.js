import React, { Component, Fragment } from "react";
import Main from "./Main";
import AppBar from "./AppBar";
import { Header, Footer } from "./Layouts";
import Practices from "./Practices";
import store from "../stores/store";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Practices />

        <Footer />
        {/* <AppBar /> */}
        {/* <Main /> */}
      </Fragment>
    );
  }
}

export default App;
