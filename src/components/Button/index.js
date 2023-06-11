import styles from "./Button.module.css";

const Button = ({ children, large }) => {
  return (
    <button className={`${styles.btn} ${styles[large]}`}>{children}</button>
  );
};

export default Button;
