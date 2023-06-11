import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchbar}>
      <SearchIcon />
      <input className={styles.inputSearchBar} type="text" placeholder="O que você está procurando?" />
    </div>
  );
};

export default SearchBar;
