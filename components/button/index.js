import styles from "./index.module.scss";


const Button = ({ cta = "Apply now", isSecondary = false, onClick }) => {
  return (
    <button 
    onClick={onClick}
    className={isSecondary ? styles.secondaryDiv : styles.primaryDiv}>
      <p className={isSecondary ? styles.secondaryLabel : styles.primaryLabel}>
        {cta}
      </p>
    </button>
  );
};

export default Button;