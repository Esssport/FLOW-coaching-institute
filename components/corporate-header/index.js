import PrimaryButton from "../button-primary";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.contentView}>
        <p className={styles.title}>
          The FLOW Coaching Institute’s Corporate Coaching
          Services
        </p>
        <p className={styles.body}>
          We want to help managers and employees work
          together to create a workplace that is more than
          the sum of its parts. We believe that the
          individuals in your company are capable of so much
          more when they&#039;re working with one another,
          in a productive and harmoinious flow.
        </p>
        <PrimaryButton className={styles.primaryButton} />
      </div>
      <img
        alt=""
        src="https://static.overlay-tech.com/assets/27a8f3a1-beb7-44ba-9517-970ae52e0399.png"
      />
    </div>
  );
};

export default Header;