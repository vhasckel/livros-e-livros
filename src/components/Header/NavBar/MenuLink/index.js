import { Link } from "react-router-dom";
import styles from "./MenuLink.module.css";

const MenuLink = ({ children, to }) => {
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  );
};

export default MenuLink;