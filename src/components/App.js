import React, { Fragment } from "react";
import Drawer from "./Layouts/Drawer";
// import store from "../stores/store";
import { exercises } from "../stores/store";

class App extends React.Component {
  state = {
    exercises,
    exercise: {}
  };

  getExerciseByMucles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleCategorySelect = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));
  };

  render() {
    return (
      <Fragment>
        {/* <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        /> */}
        <Drawer />

        {/* <Practices
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelect}
        />

        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.handleCategorySelect}
        /> */}
      </Fragment>
    );
  }
}

export default App;
