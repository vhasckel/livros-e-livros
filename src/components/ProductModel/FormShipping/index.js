import Button from "../../Button";
import styles from "./FormShipping.module.css";

const FormShipping = () => {
  return (
    <div className={styles.container}>
      <p className={styles.CEPTitle}>Calcular frete:</p>
      <label className={styles.calcShipping}>
        <input
          className={styles.CEPInput}
          type="number"
          placeholder="Digite seu CEP"
        />
        <Button large="CEP">calcular</Button>
      </label>
    </div>
  );
};

export default FormShipping;
