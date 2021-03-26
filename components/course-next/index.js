// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
// import { ApplyBtn, ContactUsBtn } from "components";
import styles from "./index.module.scss";

const CourseNextSection = ({
  iconRipples = "https://static.overlay-tech.com/assets/44f0db54-62a7-45e4-972a-1ccd19671659.svg",
  nextCourseTitle = "Next course is in 7 days"
}) => {
  return (
    <div className={styles.CourseNextSection}>
      <div className={styles.nextCourseGroup}>
        <img
          alt=""
          className={styles.iconRipples}
          src={iconRipples}
        />
        <p className={styles.nextCourseTitle}>
          {nextCourseTitle}
        </p>
      </div>
      <div className={styles.buttons}>
        {/* <ApplyBtn className={styles.applyBtn} />
        <ContactUsBtn className={styles.contactUsBtn} /> */}
      </div>
    </div>
  );
};

export default CourseNextSection;