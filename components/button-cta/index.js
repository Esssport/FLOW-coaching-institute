import styles from "./index.module.scss";


const buttonCTA = ({ cta = "Apply now" }) => {
  return (
    <div className={styles.getInTouchBtn}>
      <p className={styles.getintouchBtn}>
        {cta}
      </p>
    </div>
  );
};

export default buttonCTA;