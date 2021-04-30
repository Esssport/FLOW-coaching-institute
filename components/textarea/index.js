import styles from "./index.module.scss";

const Textarea = ({ text = "Message<br /> " }) => {
  return (
    <div className={styles.input}>
      <div className={styles.base}>
        <p className={styles.email}>{text}</p>
        <div className={styles.formField} />
      </div>
    </div>
  );
};

export default Textarea;