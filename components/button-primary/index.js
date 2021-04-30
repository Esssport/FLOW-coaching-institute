import styles from "./index.module.scss";

const PrimaryButton = ({ btnLabel = "Download" }) => {
    return (
      <div className={styles.primaryButton}>
        <button className={styles.btnLabel}>{btnLabel}</button>
      </div>
    );
  };
  
  export default PrimaryButton;