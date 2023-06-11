import { ReactComponent as ArrowDown } from "../../../icons/arrow_down.svg";
import MenuLink from "./MenuLink";
import styles from "./NavBar.module.css";

const NavBar = () => {
  {
    return (
      <nav>
        <div className={styles.links}>
          <MenuLink to="">
            Filtre por temas
            <ArrowDown />
          </MenuLink>

          <MenuLink to="/papelaria">
            Papelaria
          </MenuLink>

          <MenuLink to="/revistas">
            Revistas
          </MenuLink>

          <MenuLink to="/sobre">
            Sobre
          </MenuLink>

          <MenuLink to="/contato">
            Contato
          </MenuLink>
        </div>
      </nav>
    );
  }
};

export default NavBar;
