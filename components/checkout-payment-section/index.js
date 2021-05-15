import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import PaymentSquare from "../payment-square";

// import {
//   Input,
//   InstallOptionLabel,
//   PaymentInstallmentItem,
//   PrimaryButton,
//   SecondaryButton
// } from "components";

const PaymentSection = (props) => {
  const {price} = props
  return (
    <div className={styles.paymentMethods}>
      <div className={styles.topSection}>
        <div className={styles.contentView}>
          <div className={styles.header}>
            <p className={styles.title}>Payment Details</p>
            <img
              alt=""
              src="https://static.overlay-tech.com/assets/b712ed1f-741a-492b-9931-87e4d9b918bb.png"
            />
          </div>
          <PaymentSquare />
          {/* <Input className={styles.input} />
          <Input className={styles.input} />
          <div className={styles.row}>
            <Input className={styles.inputTwo} />
            <Input className={styles.inputTwo} />
          </div> */}
          {/* <InstallOptionLabel
            className={styles.installOptionLabel}
          /> */}
        </div>
        <div className={styles.paymentPlans}>
          <div className={styles.contentViewTwo}>
            <p className={styles.titleTwo}>Payment Plans</p>
            <div className={styles.paymentPlanOptions}>
              <div className={styles.headerTwo}>
                <p className={styles.titleThree}>
                  No. of installments
                </p>
                <p className={styles.titleThree}>
                  Additional Charge
                </p>
                <p className={styles.titleFour}>Total</p>
              </div>
              {/* <PaymentInstallmentItem /> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.payWithCreditCard}>
          <div className={styles.contentViewThree}>
            <p className={styles.amountLabel}>
              Total amount:
            </p>
            <p className={styles.price}>{price} CAD$</p>
          </div>
        </div>
        <div className={styles.payWithCreditCard}>
          <div className={styles.contentViewFour}>
            <p className={styles.titleFive}>
              You can also pay with paypal
            </p>
            <p className={styles.subtitle}>
              No installments available
            </p>
          </div>
          {/* <SecondaryButton
            className={styles.secondaryButton}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;