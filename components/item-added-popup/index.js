import styles from "./index.module.scss";
import React from "react";

// import {
//   CloseBtn,
//   SecondaryButton,
//   LearnmoreBtn
// } from "components";

const ItemAddedPopup = () => {
  return (
    <div className={styles.itemAddedPopup}>
      {/* <CloseBtn className={styles.closeBtn} /> */}
      <div className={styles.contentView}>
        <p className={styles.title}>ITEM ADDED</p>
        <p className={styles.description}>
          We have added the item to your cart. What you like
          to do now?
        </p>
        <div className={styles.buttons}>
          {/* <SecondaryButton
            className={styles.secondaryButton}
          /> */}
          {/* <LearnmoreBtn /> */}
        </div>
      </div>
    </div>
  );
};

export default ItemAddedPopup;