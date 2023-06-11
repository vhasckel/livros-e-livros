import { useEffect, useState } from "react";
import { ReactComponent as Minus } from "../../../icons/minus.svg";
import { ReactComponent as Plus } from "../../../icons/plus.svg";
import styles from "./FormAddProduct.module.css";

const FormAddProducts = () => {
  const [counter, setCounter] = useState(1);

  //vai verificar se já existe algum dado guardado
  useEffect(() => {
    if (localStorage.getItem("item_quantity") !== null) {
      setCounter(JSON.parse(localStorage.getItem("item_quantity")));
    }
  }, []);

  // nao entendi pq esse useEffect nao funcionou e nao guardou os dados
  // useEffect(() => {
  //   console.debug("setItem", localStorage.setItem("item_quantity", JSON.stringify(counter)));
  // }, [counter]);

  // const handleClickPlus = () => {
  //   setCounter((c) => c + 1);
  // };

  // const handleClickMinus = () => {
  //   setCounter((c) => Math.max(c - 1, 1));
  // };

  const handleClickPlus = () => {
    setCounter((c) => {
      const updateCounter = c + 1;
      localStorage.setItem("item_quantity", updateCounter);
      return updateCounter;
    });
  };

  const handleClickMinus = () => {
    setCounter((c) => {
      const updateCounter = Math.max(c - 1, 1);
      localStorage.setItem("item_quantity", updateCounter);
      return updateCounter;
    });
  };

  return (
    <form className={styles.productForm}>
      <div className={styles.formRow}>
        <button
          type="button"
          onClick={handleClickMinus}
          className={styles.btnMinus}
        >
          <span className={styles.quantityMinus}>
            <Minus />
          </span>
        </button>

        <div className={styles.formControl}>
          <p>{counter}</p>
        </div>

        <button
          type="button"
          onClick={handleClickPlus}
          className={styles.btnPlus}
        >
          <span className={styles.quantityPlus}>
            <Plus />
          </span>
        </button>
      </div>
    </form>
  );
};

export default FormAddProducts;
