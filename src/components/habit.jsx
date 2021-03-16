import { Component } from "react";

class Habit extends Component {
  render() {
    return (
      <li className="habit">
        <span className="habit__name">Reading</span>
        <span className="habit__count">8</span>
        <button className="habit__button habit__button--increase">
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit__button habit__button--decrease">
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit__button habit__button--delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}
export default Habit;
