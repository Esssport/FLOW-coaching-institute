import styles from "./index.module.scss";



import CourseCard from "../course-card";

const CourseCardSection = ({
  sectionTitle = "Program Overview in a Nuthsell"
}) => {
  return (
    <div className={styles.courseOverviewSection}>
      <p className={styles.sectionTitle}>{sectionTitle}</p>
      <div className={styles.rowOne}>
        <CourseCard className={styles.cardOne} />
        <CourseCard className={styles.cardOne} />
      </div>
      <div className={styles.rowOne}>
        <CourseCard className={styles.cardOne} />
        <CourseCard className={styles.cardOne} />
      </div>
    </div>
  );
};

export default CourseCardSection;