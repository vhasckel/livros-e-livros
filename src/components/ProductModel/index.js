import Button from "../Button";
import FormAddProducts from "./FormAddProduct";
import FormShipping from "./FormShipping";
import styles from "./ProductModel.module.css";

const ProductModel = ({ title, author, price, cover, description }) => {
  return (
    <>
      <article className={styles.productModel}>
        <div className={styles.productModelContainer}>
          <div className={styles.productModelCover}>
            <img src={cover} />
            <p className={styles.description}>{description}</p>
          </div>

          <div className={styles.productModelInfos}>
            <h2 className={styles.productModelTitle}>{title}</h2>
            <h3 className={styles.productModelAuthor}>{author}</h3>
            <p className={styles.productModelPrice}>R$ {price}</p>

            <div className={styles.productModelBuy}>
              <FormAddProducts />
              <Button large="lg">comprar</Button>
            </div>

            <FormShipping />
          </div>
        </div>
      </article>
    </>
  );
};

export default ProductModel;
