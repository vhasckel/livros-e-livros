import styles from "./Header.module.css";
import LogoImage from "../../assets/logo.png";
import LivrosELivros from "../../assets/Livros&Livros.png";
import { ReactComponent as ProfileIcon } from "../../icons/profile.svg";
import { ReactComponent as ShoppingBag } from "../../icons/shopping_bag.svg";
import SearchBar from "../SearchBar";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className={styles.container}>
          <Link to="/">
            <div className={styles.container_left}>
              <h4 className={styles.mobileNavigation}>nav</h4>
              <img className={styles.logoCoruja} src={LogoImage} alt="Imagem de uma coruja, logo da loja"></img>
              <img className={styles.livrosElivros} src={LivrosELivros} alt="Livros e Livros"></img>
            </div>
          </Link>

          <div className={styles.container_right}>
            <SearchBar />
            <Link to="login">
              <ProfileIcon />
            </Link>
            <ShoppingBag />
          </div>
        </div>
      </header>
      <NavBar />
    </>
  );
};

export default Header;
