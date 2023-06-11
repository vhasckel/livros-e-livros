import ProductCard from "../../components/ProductCard";
import books from '../../json/books.json';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <main className={styles.container}>
      <ul className={styles.books}>
        {books.map((book) => (
          <li key={book.id}>
            <ProductCard book={book} />
          </li>
        ))}
      </ul>
      </main>
    </>
  );
};

export default HomePage;
