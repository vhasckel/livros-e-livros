import Button from "../../Button";
import styles from "./FormShipping.module.css";

const FormShipping = () => {
  return (
    <div className={styles.container}>
      <label className={styles.calcShipping}>
        <p className={styles.CEPTitle}>Calcular frete:</p>
        <input className={styles.CEPInput} type="number" placeholder="Digite seu CEP" />
      </label>
			<div className={styles.btnCEP}>
        <Button large="CEP">calcular</Button>
			</div>
    </div>
  );
};

export default FormShipping;
