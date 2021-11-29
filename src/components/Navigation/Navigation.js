/** @format */

import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink to='/' className={({ isActive }) => (isActive ? "link activ" : "link")}>
      Home
    </NavLink>
    <NavLink
      to='/movies'
      className={({ isActive }) => (isActive ? "link activ" : "link")}>
      Movies
    </NavLink>
  </nav>
);
export default Navigation;
