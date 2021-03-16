import { createRef, memo, PureComponent } from "react";

const HabitAddForm = memo((props) => {
  console.log("form");
  const inputRef = createRef();
  const formRef = createRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.handleAdd(name);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-form__input"
        placeholder="Habit"
      />
      <button className="add-form__button">Add</button>
    </form>
  );
});

// class HabitAddForm extends PureComponent {
//   inputRef = createRef();
//   formRef = createRef();
//   handleSubmit = (event) => {
//     event.preventDefault();
//     const name = this.inputRef.current.value;
//     name && this.props.handleAdd(name);
//     // this.inputRef.current.value = "";
//     this.formRef.current.reset();
//   };
//   render() {
//     return (
//       <form
//         ref={this.formRef}
//         className="add-form"
//         onSubmit={this.handleSubmit}
//       >
//         <input
//           ref={this.inputRef}
//           type="text"
//           className="add-form__input"
//           placeholder="Habit"
//         />
//         <button className="add-form__button">Add</button>
//       </form>
//     );
//   }
// }

export default HabitAddForm;
