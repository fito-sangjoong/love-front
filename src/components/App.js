import React, { Component, Fragment } from "react";
import Main from "./Main";
import AppBar from "./AppBar";
import { Header, Footer } from "./Layouts";
import Practices from "./Practices";
import store from "../stores/store";
import { muscles, exercises } from "../stores/store";

class App extends React.Component {
  state = {
    exercises,
  };

  getExcerciseByMucles() {
    return Object.entries(
      this.state.exercises.reduce((excercises, excercise) => {
        const { muscles } = excercise;

        excercises[muscles] = excercises[muscles]
          ? [...excercises[muscles], excercise]
          : [excercise];

        return excercises;
      }, {})
    );
  }

  render() {
    const excercises = this.getExcerciseByMucles();
    return (
      <Fragment>
        <Header />

        <Practices excercises={excercises} />

        <Footer muscles={muscles} />
        {/* <AppBar /> */}
        {/* <Main /> */}
      </Fragment>
    );
  }
}

export default App;
