import Button from "../../components/Button";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.title}>
          <h1>Criar uma conta</h1>
        </section>
        <section>
          <form className={styles.containerForm}>
            <div className={styles.labelBox}>
              <label className={styles.labelTitle} for="name">
                Nome completo
              </label>
              <input
                className={styles.inputLogin}
                id="name"
                type="text"
                placeholder="Seu nome completo"
              />
            </div>
            <div className={styles.labelBox}>
              <label className={styles.labelTitle} for="email">
                E-mail
              </label>
              <input
                className={styles.inputLogin}
                id="email"
                type="email"
                placeholder="seuemail@email.com"
              />
            </div>
            <div className={styles.labelBox}>
              <label className={styles.labelTitle} for="phone">
                Telefone
              </label>
              <input
                className={styles.inputLogin}
                id="phone"
                type="number"
                placeholder="4812345678"
              />
            </div>
            <div className={styles.labelBox}>
              <label className={styles.labelTitle} for="password">
                Senha
              </label>
              <input
                className={styles.inputLogin}
                id="password"
                type="password"
              />
            </div>
            <div className={styles.labelBox}>
              <label className={styles.labelTitle} for="password_confirmation">
                Confirmar senha
              </label>
              <input
                className={styles.inputLogin}
                id="password_confirmation"
                type="password"
              />
            </div>
          <Button large="login">criar uma conta</Button>
          </form>
        </section>
      </main>
    </>
  );
};

export default LoginPage;
