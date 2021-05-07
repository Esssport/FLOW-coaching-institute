import IconlyBoldTicket from "../iconly-bold-ticket";
import styles from "./index.module.scss";

const StepCard = ({
  cardSubtitle = "Get started for free by simply filling out a form.",
  cardTitle = "1. Join"
}) => {
  return (
    <div className={styles.stepCard}>
      <IconlyBoldTicket
        className={styles.iconlyBoldTicket}
      />
      <div className={styles.frame814}>
        <p className={styles.cardTitle}>{cardTitle}</p>
        <p className={styles.cardSubtitle}>
          {cardSubtitle}
        </p>
      </div>
    </div>
  );
};

export default StepCard;