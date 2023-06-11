import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import Button from "../Button";

const ProductCard = ({ book }) => {
  return (
    <Link to={`/produtos/${book.id}`}>
      <div className={styles.book}>
        <img className={styles.cover} src={`${book.cover}`} />

        <h2 className={styles.title}>{book.title}</h2>
        <h3 className={styles.author}>{book.author}</h3>
        <p className={styles.price}>R$ {book.price}</p>

        <Button>comprar</Button>

      </div>
    </Link>
  );
};

export default ProductCard;
