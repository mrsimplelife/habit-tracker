import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <i className="navbar__logo fas fa-leaf"></i>
        <span>habit tracker</span>
        <span className="navbar__count">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Navbar;
