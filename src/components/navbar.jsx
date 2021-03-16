import { PureComponent } from "react";

class Navbar extends PureComponent {
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
