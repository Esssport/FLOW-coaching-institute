import styles from "./index.module.scss";


const CourseHeaderSection = ({
  courseDescription = "Module 1 - 6: The Path to Mastery Practicum &amp; Supervision Module (ICF ACTP / ACC &amp; PCC)",
  courseTitle = "ICF ACTP Advanced Certification Track",
  iconPlay = "https://static.overlay-tech.com/assets/a9f428cc-eeb3-4a18-abd1-15eb5a99b131.svg"
}) => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.bgGradient} />
        <p className={styles.courseTitle}>{courseTitle}</p>
        <p className={styles.courseDescription}>
          {courseDescription}
        </p>
      </div>
      <img
        alt=""
        className={styles.iconPlay}
        src={iconPlay}
      />
    </div>
  );
};

export default CourseHeaderSection;
