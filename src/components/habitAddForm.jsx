import { Component, createRef } from "react";

class HabitAddForm extends Component {
  inputRef = createRef();
  formRef = createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.handleAdd(name, this.inputRef);
    // this.inputRef.current.value = "";
    this.formRef.current.reset();
  };
  render() {
    return (
      <form
        ref={this.formRef}
        className="add-form"
        onSubmit={this.handleSubmit}
      >
        <input
          ref={this.inputRef}
          type="text"
          className="add-form__input"
          placeholder="Habit"
        />
        <button className="add-form__button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
