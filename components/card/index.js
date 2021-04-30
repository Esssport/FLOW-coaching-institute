import styles from "./index.module.scss";
import PrimaryButton from "../button-primary"

const Card = ({
  subtitle = "Let me explain the meaning reusable component as I feel it contextually.",
  tag = "Business",
  titleTwo = "Reusable components available for every layout"
}) => {
  return (
    <div className={styles.card1}>
      <div className={styles.flexWrapperOne}>
        <div className={styles.tagBackground} />
        <span className={styles.tag}>{tag}</span>
      </div>
      <p className={styles.title}>{titleTwo}</p>
      <p className={styles.subtitle}>{subtitle}</p>
      <PrimaryButton />
    </div>
  );
};

export default Card;