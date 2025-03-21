import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" width="40px" />
        <span>SHOPMATE</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/products" end>
          Products
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};
