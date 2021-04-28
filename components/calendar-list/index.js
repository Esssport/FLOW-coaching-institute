import styles from "./index.module.scss";
import React, { useState } from "react";
import courses from "../../courses/courses"
import CalendarRowContainer from "../calendar-row-container";
import ItemAddedPopup from "../item-added-popup";


const CalendarList = ({ primaryOnClick }) => {
  const [showModal, setShowModal] = useState(true)
  const [course, setCourse] = useState({})

  const handleCourse = (props) => {
    console.log("course Handled", props)
  }
  return (
    <div className={styles.container}>
      {showModal ? <ItemAddedPopup /> : ""}
      {courses.map(course => {
        return (
          <CalendarRowContainer primaryOnClick={handleCourse} key={course.id} {...course}/>
        )
      })}
    </div>
  );
};

export default CalendarList;