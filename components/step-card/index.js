import IconlyBoldTicketStar from "../iconly-bold-ticket-star";
import styles from "./index.module.scss";

const StepCard = ({
  getStartedForFreeBySimplyFillingo = "Online Business Coach Certification Training Program"
}) => {
  return (
    <div className={styles.stepCard}>
      <IconlyBoldTicketStar
        className={styles.iconlyBoldTicketStar}
      />
      <div className={styles.frame814}>
        <p
          className={
            styles.getStartedForFreeBySimplyFillingO
          }
        >
          {getStartedForFreeBySimplyFillingo}
        </p>
      </div>
    </div>
  );
};

export default StepCard;