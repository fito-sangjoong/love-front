import React, { Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Practices from "./Practices";
// import store from "../stores/store";
import { muscles, exercises } from "../stores/store";

class App extends React.Component {
  state = {
    exercises,
    exercise: {},
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

  handleCategorySelected = (category) => {
    this.setState({
      category,
    });
  };

  handleExerciseSelected = (id) => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find((ex) => ex.id === id),
    }));
  };

  render() {
    const exercises = this.getExerciseByMucles(),
      { category, exercise } = this.state;
    return (
      <Fragment>
        <Header />

        <Practices
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
        />

        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}

export default App;
