import PrimaryButton from "../button-primary";
import styles from "./PaymentDetailSectionMob.module.scss";

const PaymentDetailSectionMob = () => {
  return (
    <div className={styles.paymentDetailSection}>
      <div className={styles.background} />
      <div className={styles.contentView}>
        <p className={styles.title}>Your details</p>
        <div className={styles.emailSection}>
          <div className={styles.left}>
            <p className={styles.titleTwo}>PayPal Email</p>
            <p className={styles.subtitle}>
              You will receive your earnings to your account
              at the end of each month if your balance
              exceeds CAD 100
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.input}>
              <div className={styles.base}>
                <p className={styles.email}>
                  Your PayPal ID
                </p>
                <div className={styles.formField} />
              </div>
            </div>
            <p className={styles.label}>
              burak&#64;paypal.com
            </p>
          </div>
        </div>
        <PrimaryButton className={styles.primaryButton} />
      </div>
    </div>
  );
};

export default PaymentDetailSectionMob;