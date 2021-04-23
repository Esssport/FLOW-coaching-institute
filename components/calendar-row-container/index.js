import styles from "./index.module.scss";
import React, { useState } from "react";
import CalendarRow from "../calendar-row";
import CalendarDetails from "../calendar-details";


const CalendarRowContainer = (props) => {
  const [isHidden, setIsHidden] = useState(true)
  const { primaryOnClick, secondaryOnClick } = props
  
  const updateState = () => {
    console.log("isHidden", isHidden)
    return setIsHidden(isHidden ? false : true)
  }
  return (
    <ul>
      <CalendarRow
      {...props}
        primaryOnClick={primaryOnClick}
        secondaryOnClick={updateState}
      />
      <CalendarDetails
        {...props}
        closeOnClick={updateState}
        isHidden={isHidden}
      />
    </ul>
  )
}

export default CalendarRowContainer;