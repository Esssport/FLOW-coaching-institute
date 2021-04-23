import styles from "./index.module.scss";
import React from "react";
import GroupButtonCTA from "../group-buttons-cta";

const Price = ({ price, currency = "CAD$" }) => {
  return (
    <p className={styles.price}>
      <strong className={styles.priceEmphasis3}>
        {currency}
      </strong>
      <strong className={styles.priceEmphasis4}> </strong>
      <strong className={styles.priceEmphasis5}>
        {price}
      </strong>
    </p>
  )
}

//TODO: "price" type should be number, put the "," automatically in the component above
const CalendarRow = (props) => {
const {
    courseTitle,
      dates,
      price,
      seatCount,
      days,
      primaryOnClick,
      secondaryOnClick,
  } = props
  return (
    <div className={styles.tableRowClose}>
      <div className={styles.contentView}>
        <p className={styles.courseTitle}>{courseTitle}</p>
        <p className={styles.trainingDays}>
          {days}
        </p>
        <p className={styles.dates}>{dates}</p>
        <p className={styles.seatCount}>{seatCount}</p>
        <Price price={price} />
        <GroupButtonCTA
        primaryCTA={"Add to Card"}
        secondaryCTA={"Details"}
        reverse={true}
        primaryOnClick={primaryOnClick}
        secondaryOnClick={secondaryOnClick}
        />
      </div>
    </div>
  );
};

export default CalendarRow;