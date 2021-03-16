import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  render() {
    return (
      <>
        <HabitAddForm handleAdd={this.props.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              handleIncrement={this.props.handleIncrement}
              handleDecrement={this.props.handleDecrement}
              handleDelete={this.props.handleDelete}
            />
          ))}
        </ul>
        <button
          className="habits__reset-button"
          onClick={this.props.handleReset}
        >
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
