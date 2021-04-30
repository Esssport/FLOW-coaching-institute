import styles from "./index.module.scss";


const ButtonTransparent = ({ onClick, btnLabel = "Contact" }) => {
  return (
    <button onClick={onClick} className={styles.transparentButton}>
      <p className={styles.btnLabel}>{btnLabel}</p>
    </button>
  );
};

export default ButtonTransparent;