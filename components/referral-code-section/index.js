import Input from "../input";
import styles from "./index.module.scss";

const ReferralCodeSection = () => {
  return (
    <div className={styles.referralCodeSection}>
      <p className={styles.title}>Your Referral Code</p>
      <Input />
    </div>
  );
};

export default ReferralCodeSection;