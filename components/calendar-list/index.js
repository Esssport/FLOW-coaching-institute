import styles from "./index.module.scss";
import React, { useState } from "react";
import CalendarRow from "../calendar-row";
import courses from "../../courses/courses"
import CalendarRowContainer from "../calendar-row-container";


const CalendarList = ({ primaryOnClick }) => {

  return (
    <div className={styles.container}>
      {courses.map(row => {
        return (
          <CalendarRowContainer key={row.id} {...row}/>
        )
      })}
    </div>
  );
};

export default CalendarList;