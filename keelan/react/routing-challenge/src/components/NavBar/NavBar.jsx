import { NavLink } from "react-router-dom";
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.main_nav}>
      <NavLink to='/'>Home</NavLink>

      <NavLink to='/users'>Users</NavLink>
    </nav>
  );
};

export default NavBar;