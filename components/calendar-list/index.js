import styles from "./index.module.scss";
import React from "react";
import { useState, useEffect } from "react";
import courses from "../../courses/courses"
import CalendarRowContainer from "../calendar-row-container";
import ItemAddedPopup from "../item-added-popup";
import axios from "axios"
import Cookies from "js-cookie"


const CalendarList = ({ primaryOnClick }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedCourses, setSelectedCourses] = useState([])
  const toggleModal = () => {
    setShowModal(showModal ? false : true);
  }
  
  useEffect(() => {
    setSelectedCourses([])
  }, [])

  const handleCourse = (course) => {
    return (() => {
      const updatedCourses = selectedCourses.concat(course)
      setSelectedCourses(updatedCourses)
      Cookies.set("cart", updatedCourses, { expires: 7 });
      console.log("SELECTEDCOURSE", updatedCourses)
      // axios
      //   .post("http://localhost:3001/cart", course)
      //   .then(response => {
      //     console.log("RSPONSE", response)
      //   })
      //   .catch(err => console.log("ERROR", err))

      toggleModal()
    })

  }
  return (
    <div className={styles.container}>
      {showModal ? <ItemAddedPopup onClick={toggleModal} /> : ""}
      {courses.map(course => {
        return (
          <CalendarRowContainer primaryOnClick={handleCourse(course)} key={course.courseTitle} {...course} />
        )
      })}
    </div>
  );
};

export default CalendarList;