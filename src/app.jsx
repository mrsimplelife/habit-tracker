import { Component } from "react";
import "./app.css";

import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };
  handleIncrement = (id) => {
    const { habits } = this.state;
    const newHabits = habits.map((habit) =>
      habit.id !== id ? habit : { ...habit, count: habit.count + 1 }
    );
    this.setState({ habits: newHabits });
  };
  handleDecrement = (id) => {
    const { habits } = this.state;
    const newHabits = habits.map((habit) =>
      habit.id !== id
        ? habit
        : { ...habit, count: habit.count > 0 ? habit.count - 1 : 0 }
    );
    this.setState({ habits: newHabits });
  };
  handleDelete = (id) => {
    const { habits } = this.state;
    const newHabits = habits.filter((habit) => habit.id !== id);
    this.setState({ habits: newHabits });
  };
  handleReset = () => {
    const habits = this.state.habits.map((habit) => ({ ...habit, count: 0 }));
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <Navbar
          totalCount={
            this.state.habits.filter((habit) => habit.count > 0).length
          }
        />
        <Habits
          habits={this.state.habits}
          handleAdd={this.handleAdd}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
          handleReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
