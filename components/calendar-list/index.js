import styles from "./index.module.scss";
import React from "react";
import { useState, useEffect } from "react";
import courses from "../../courses/courses"
import CalendarRowContainer from "../calendar-row-container";
import ItemAddedPopup from "../item-added-popup";
import Cookies from "js-cookie"


const CalendarList = ({ primaryOnClick }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedCoursesIDs, setSelectedCoursesIDs] = useState([])
  const toggleModal = () => {
    setShowModal(showModal ? false : true);
  }

  const handleCourse = (course) => {
    return (() => {
      const { id: courseID } = course;
      if (!selectedCoursesIDs.includes(courseID)) {
        const updatedCourses = selectedCoursesIDs.concat(courseID)
        setSelectedCoursesIDs(updatedCourses)
        Cookies.set("cart", updatedCourses, { expires: 7 });
      }
      toggleModal()
    })
  }

  return (
    <div className={styles.container}>
      {showModal ? <ItemAddedPopup onClick={toggleModal} /> : ""}
      {courses.map(course => {
        return (
          <CalendarRowContainer primaryOnClick={handleCourse(course)} key={course.id} {...course} />
        )
      })}
    </div>
  );
};

export default CalendarList;