import styles from "./index.module.scss";
import React from "react";

const CheckoutItem = (props) => {
  const {
    courseImage = "https://static.overlay-tech.com/assets/55bba1ec-78ae-48fe-b45b-2b183fff6766.png",
    courseOverivew = "",
    price = "N/A",
    courseTitle = ""
  } = props

  return (
    <div className={styles.cartItemAdded}>
      <div className={styles.courseInfo}>
        <img
          alt=""
          className={styles.courseImage}
          src={courseImage}
        />
        <div className={styles.infoSection}>
          <p className={styles.title}>{courseTitle}</p>
          <p className={styles.description}>
            {courseOverivew}
          </p>
        </div>
      </div>
      <div className={styles.columnTwo}>
        <p className={styles.oldPrice}>1299 CAD$</p>
        <p className={styles.newPrice}>CAD${price}</p>
      </div>
      <div className={styles.columnTwo}>
        {/* <img
          alt=""
          className={styles.addIcon}
          src="https://static.overlay-tech.com/assets/f9531924-9479-4790-8721-fd22b57b4fea.svg"
        />
        <p className={styles.itemCountLabel}>1</p> */}
        <button className={styles.btn}>
          <img
            alt=""
            className={styles.addIcon}
            src="https://static.overlay-tech.com/assets/f5ec7feb-9c9b-4489-b96a-de70f53d61dc.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;