import { createRef, PureComponent } from "react";

class HabitAddForm extends PureComponent {
  inputRef = createRef();
  formRef = createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.handleAdd(name);
    // this.inputRef.current.value = "";
    this.formRef.current.reset();
  };
  render() {
    console.log("form");
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
