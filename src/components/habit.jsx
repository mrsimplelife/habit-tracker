import { PureComponent } from "react";

class Habit extends PureComponent {
  handleIncrement = () => this.props.handleIncrement(this.props.habit.id);
  handleDecrement = () => this.props.handleDecrement(this.props.habit.id);
  handleDelete = () => this.props.handleDelete(this.props.habit.id);
  render() {
    return (
      <li className="habit">
        <span className="habit__name">{this.props.habit.name}</span>
        <span className="habit__count">{this.props.habit.count}</span>
        <button
          className="habit__button habit__button--increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit__button habit__button--decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit__button habit__button--delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}
export default Habit;
