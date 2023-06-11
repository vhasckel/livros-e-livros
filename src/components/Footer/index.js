import { ReactComponent as Phone } from '../../icons/phone.svg';
import { ReactComponent as WhatsApp } from '../../icons/whatsapp.svg';
import { ReactComponent as Instagram } from '../../icons/instagram.svg';
import { ReactComponent as Location } from '../../icons/location.svg';
import { ReactComponent as Mail } from '../../icons/mail.svg';
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.contact}>
        <p className={styles.align}> <Phone /> (48) 99137-0822</p>
        <p className={styles.align}> <WhatsApp /> (48) 3222-1244</p>
        <p className={styles.align}> <Instagram /> livrarialivroselivros</p>
				<p className={styles.align}> <Mail /> ​suporte@livroselivros.com.br</p>
        <p className={styles.align}> <Location /> Centro de Cultura e Eventos - UFSC, Trindade, Florianópolis-SC</p>
        <p>CEP: 88040-900</p>
        <p>CNPJ: </p>
      </div>
			<div className={styles.payment}>
				Formas de pagamento:
			</div>
    </footer>
  );
};

export default Footer;
