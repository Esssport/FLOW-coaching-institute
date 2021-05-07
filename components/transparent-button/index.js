import styles from "./index.module.scss";

const TransparentButton = ({
  btnLabelTwo = "learn more"
}) => {
  return (
    <div className={styles.transparentButton}>
      <p className={styles.btnLabel}>{btnLabelTwo}</p>
    </div>
  );
};

export default TransparentButton;