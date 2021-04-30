import styles from "./index.module.scss";
import React from "react";
import Link from "next/link";

const SecondaryButton = () => {
  return (
    <button className={styles.secondaryButton}>
      <Link 
      href="/checkout"
      to={{
        pathname: "/checkout",
        state: "testing the state" 
      }}
      >
        <p className={styles.btnLabel}>Proceed to checkout</p>
      </Link>
    </button>
  );
};


const CloseBtn = props => {
  return (
    <button onClick={props.onClick} className={styles.closeBtn}>
      <img
        alt=""
        src="https://static.overlay-tech.com/assets/de8da569-46e1-4217-bb75-5931cd94b9aa.svg"
      />
    </button>
  );
};

const ItemAddedPopup = (props) => {
  return (
    <div className={styles.itemAddedPopup}>
      <div className={styles.container}>
        <CloseBtn className={styles.closeBtn} onClick={props.onClick} />
        <div className={styles.contentView}>
          <p className={styles.title}>ITEM ADDED</p>
          <p className={styles.description}>
            We have added the item to your cart. What do you like
            to do now?
        </p>
          <div className={styles.buttons}>
            <SecondaryButton
              className={styles.secondaryButton}
            />
            <button onClick={props.onClick} className={styles.learnmoreBtn}>
              <p className={styles.learnMore}>Browse courses</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemAddedPopup;