import { useNavigate } from "react-router-dom";
import ButtonBuy from "../../components/Button";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404</h1>
      <div onClick={() => navigate(-1)}>
        <ButtonBuy>voltar</ButtonBuy>
      </div>
    </div>
  );
};

export default NotFound;
