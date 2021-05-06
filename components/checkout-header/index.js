import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";


const CheckoutHeader = (props) => {
  const {price, toggleShowPayment} = props

  return (
    <div className={styles.contentView}>
      <img
        alt=""
        className={styles.basketIcon}
        src="https://static.overlay-tech.com/assets/f9fb8ba8-6b60-4a2d-9f59-1b7a7513f31a.svg"
      />
      <div className={styles.flexWrapperOne}>
        <div className={styles.priceSection}>
          <div className={styles.innerSection}>
            <div className={styles.totalLabel}>
              <p className={styles.label}>Total amount:</p>
              <p className={styles.price}>{price}  CAD$</p>
            </div>
            <button onClick={toggleShowPayment} className={styles.primaryButton}>
              <p className={styles.btnLabel}>Next step</p>
            </button>
          </div>
        </div>
        <div className={styles.infoBanner}>
          <img
            alt=""
            className={styles.iconlyLightInfoCircle}
            src="https://static.overlay-tech.com/assets/bcb2348e-a464-4b67-84f4-ee5d48315b0b.svg"
          />
          <p className={styles.labelTwo}>
            You may choose to pay in installments or Paypal
            in the next step.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutHeader;