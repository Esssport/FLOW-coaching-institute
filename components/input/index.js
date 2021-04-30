import styles from "./index.module.scss";

const Input = ({ text = "Your Name" }) => {
  return (
    <div className={styles.input}>
      <div className={styles.base}>
        <p className={styles.email}>{text}</p>
        <div className={styles.formField} />
      </div>
    </div>
  );
};

export default Input;