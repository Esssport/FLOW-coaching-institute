import styles from "./index.module.scss";


const ButtonTransparent = ({ btnLabel = "Contact" }) => {
  return (
    <div className={styles.transparentButton}>
      <p className={styles.btnLabel}>{btnLabel}</p>
    </div>
  );
};

export default ButtonTransparent;