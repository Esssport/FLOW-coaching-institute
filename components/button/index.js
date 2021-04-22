import styles from "./index.module.scss";


const Button = ({ cta = "Apply now", isSecondary = false }) => {
  {console.log(isSecondary ? styles.secondaryDiv : styles.primaryDiv)}
  return (
    <button className={isSecondary ? styles.secondaryDiv : styles.primaryDiv}>
      <p className={isSecondary ? styles.secondaryLabel : styles.primaryLabel}>
        {cta}
      </p>
    </button>
  );
};

export default Button;