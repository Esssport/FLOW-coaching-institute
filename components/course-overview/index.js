import styles from "./index.module.scss";


// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
// import { AccreditedSection } from "components";

const CourseOverviewSection = ({
  courseOverviewDescription = (
    <>
      FLOW offers ICF ACTP certification path from{" "}
      <strong
        className={
          styles.courseOverviewDescriptionEmphasis2
        }
      >
        Module 1 – 6{" "}
      </strong>
      which is an the “all inclusive” ICF online
      certification program including all 6 modules. The
      ACTP track offers beginning to end ICF Professional
      Coach certification training all the way up to ACC
      &amp; PCC. Completion of the program gives you 125
      coach specific training hours, completion of mandatory
      mentoring hours and a performance evaluation process
      included.
    </>
  ),
  courseOverviewTitle = "Course Overview"
}) => {
  return (
    <div className={styles.courseOverviewSection}>
      <p className={styles.courseOverviewTitle}>
        {courseOverviewTitle}
      </p>
      {/* <AccreditedSection
        className={styles.accreditedSection}
      /> */}
      <p className={styles.courseOverviewDescription}>
        {courseOverviewDescription}
      </p>
    </div>
  );
};

export default CourseOverviewSection;