import StepCard from "../step-card";
import TransparentButton from "../transparent-button";
import styles from "./index.module.scss";

const CoursePromote = () => {
  return (
    <div className={styles.coursePromote}>
      <p className={styles.sectionTitle}>
        What courses can you promote?
      </p>
      <div className={styles.frame996}>
        <StepCard className={styles.stepCard} />
        <StepCard className={styles.stepCard} />
        <StepCard className={styles.stepCard} />
      </div>
      <div className={styles.frame997}>
        <StepCard className={styles.stepCard} />
        <StepCard className={styles.stepCard} />
      </div>
      <TransparentButton
        className={styles.transparentButton}
      />
    </div>
  );
};

export default CoursePromote;