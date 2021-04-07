import styles from "./index.module.scss";
import AccreditedSection from '../accredited-section'

const CourseOverviewSection = ({
  courseOverviewDescription = "FLOW offers ICF ACTP certification path from Module 1 – 6 which is an the “all inclusive” ICF online certification program including all 6 modules. The ACTP track offers beginning to end ICF Professional Coach certification training all the way up to ACC &amp; PCC. Completion of the program gives you 125 coach specific training hours, completion of mandatory mentoring hours  and a performance evaluation process included.",
  courseOverviewTitle = "Course Overview"
}) => {
  return (
    <div className={styles.courseOverviewSection}>
      <p className={styles.courseOverviewTitle}>
        {courseOverviewTitle}
      </p>
      <AccreditedSection
        className={styles.accreditedSection}
      />
      <p className={styles.courseOverviewDescription}>
        {courseOverviewDescription}
      </p>
    </div>
  );
};

export default CourseOverviewSection;