import styles from "./index.module.scss";
import React from "react";
import {useState, useEffect} from 'react';
import CalendarRow from "../calendar-row";
import CalendarDetails from "../calendar-details";


const CalendarRowContainer = (props) => {
  const [isHidden, setIsHidden] = useState(true)
  const { primaryOnClick } = props
  
  const toggleDetails = () => {
    return setIsHidden(isHidden ? false : true)
  }
  return (
    <ul>
      <CalendarRow
      {...props}
        primaryOnClick={primaryOnClick}
        secondaryOnClick={toggleDetails}
      />
      <CalendarDetails
        {...props}
        closeOnClick={toggleDetails}
        isHidden={isHidden}
      />
    </ul>
  )
}

export default CalendarRowContainer;