import "../app.css";
import React, { useCallback, useEffect, useRef, useState } from "react";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  useEffect(() => {
    console.log("mounted");
  }, []);
  return (
    <li className="habit">
      <span ref={spanRef}>Reading</span>
      <span className="habit__count">{count}</span>
      <button
        className="habit__button habit__button--increase"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};
// class SimpleHabit extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <li className="habit">
//         <span>Reading</span>
//         <span className="habit__count">{this.state.count}</span>
//         <button
//           className="habit__button habit__button--increase"
//           onClick={this.handleIncrement}
//         >
//           <i className="fas fa-plus-square"></i>
//         </button>
//       </li>
//     );
//   }
// }

export default SimpleHabit;
