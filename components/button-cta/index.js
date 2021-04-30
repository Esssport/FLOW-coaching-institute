import styles from "./index.module.scss";
import Button from "../button"


const ButtonCTA = ({ cta = "Apply now", isSecondary=false, onClick }) => {
  return (
    <Button onClick={onClick} cta={cta} isSecondary={isSecondary}/>
  );
};

export default ButtonCTA;