import IconlyBoldInfoCircle from "../iconly-bold-info-circle";
import IconlyBoldArrowUp2 from "../iconly-bold-arrow-up2"
  
 
import styles from "./index.module.scss";

const FaqItem = ({
  questionLabel = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint?"
}) => {
  return (
    <div className={styles.faqItem}>
      <div className={styles.background} />
      <p className={styles.questionLabel}>
        {questionLabel}
      </p>
      <IconlyBoldInfoCircle
        className={styles.iconlyBoldInfoCircle}
      />
      <IconlyBoldArrowUp2
        className={styles.iconlyBoldArrowUp2}
      />
    </div>
  );
};

export default FaqItem;