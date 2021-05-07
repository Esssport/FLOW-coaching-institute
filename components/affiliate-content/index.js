import Input from "../input";
import PrimaryButton from "../input";
import Card from "../affiliate-card";
import styles from "./index.module.scss";

const AffiliateContent = () => {
  return (
    <div className={styles.affiliateContent}>
      <div className={styles.contentViewTwo}>
        <div className={styles.header}>
          <p className={styles.title}>Affiliate Program</p>
          <p className={styles.subtitle}>
            Invite others to become a coach and earn your
            own part.
          </p>
        </div>
        <div className={styles.contentTwo}>
          <div className={styles.statsSection}>
            <div className={styles.background} />
            <div className={styles.content}>
              <p className={styles.titleTwo}>Your stats</p>
              <div className={styles.cards}>
                <div className={styles.statsCard}>
                  <p className={styles.count}>2</p>
                  <p className={styles.label}>Referrals</p>
                </div>
                <div className={styles.divider} />
                <div className={styles.statsCard}>
                  <p className={styles.countTwo}>CAD 200</p>
                  <p className={styles.labelTwo}>
                    Awaiting Balance
                  </p>
                </div>
                <div className={styles.divider} />
                <div className={styles.statsCard}>
                  <p className={styles.countTwo}>CAD 400</p>
                  <p className={styles.label}>
                    Total Earnings
                  </p>
                </div>
                <div className={styles.divider} />
                <div className={styles.statsCard}>
                  <p className={styles.countTwo}>
                    30 minutes ago
                  </p>
                  <p className={styles.label}>
                    Last Updated
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.referralCodeSection}>
            <p className={styles.titleThree}>
              Your Referral Code
            </p>
            <Input />
          </div>
          <div className={styles.statsSection}>
            <div className={styles.backgroundTwo} />
            <div className={styles.contentView}>
              <p className={styles.titleFour}>
                Your details
              </p>
              <div className={styles.emailSection}>
                <div className={styles.left}>
                  <p className={styles.titleFive}>
                    PayPal Email
                  </p>
                  <p className={styles.subtitleTwo}>
                    You will receive your earnings to your
                    account at the end of each month if your
                    balance exceeds CAD 100
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
                  <p className={styles.labelThree}>
                    burak&#64;paypal.com
                  </p>
                </div>
              </div>
              <PrimaryButton
                className={styles.primaryButton}
              />
            </div>
          </div>
          <div className={styles.headerTwo}>
            <p className={styles.titleSix}>
              Marketing Materials
            </p>
            <p className={styles.subtitl}>
              Resources help you start promoting now. All
              materials are ready to be used so no editing
              skills needed.
            </p>
          </div>
          <div className={styles.cardsTwo}>
            <Card className={styles.card} />
            <Card className={styles.card} />
            <Card className={styles.card} />
            <Card className={styles.card} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateContent;