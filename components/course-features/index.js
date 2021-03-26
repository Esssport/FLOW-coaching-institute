import styles from "./index.module.scss";

const CourseFeatures = ({
  image = "https://static.overlay-tech.com/assets/a3bf31ba-f53b-457f-9bfa-30152099276d.png",
  subtitle = "Our Advanced Coaching Certification focuses on:",
  text = "Your coaching confidence",
  textFive = "Themed into 3 different styles",
  textFour = "Themed into 3 different styles",
  textThree = "Giving you an additional 65 training hours (125 ACTP total when combined with 60 hours from your Core modules 1-5 training)",
  textTwo = "Clarity about your coaching specialty",
  title = "The Flow Coaching Institute invites you to join the elite of professional coaches:"
}) => {
  return (
    <div className={styles.featuresSection}>
      <img alt="" className={styles.image} src={image} />
      <div className={styles.featuresList}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.items}>
          <div className={styles.item05}>
            <div className={styles.icon}>
              <div className={styles.iconCheck}>
                <img
                  alt=""
                  src="https://static.overlay-tech.com/assets/d79335e6-f9db-46a7-a759-e2d591fda9b0.svg"
                />
              </div>
            </div>
            <p className={styles.text}>{text}</p>
          </div>
          <div className={styles.item05}>
            <div className={styles.icon}>
              <div className={styles.iconCheck}>
                <img
                  alt=""
                  src="https://static.overlay-tech.com/assets/ff841ea9-992d-4135-a60e-eeb6786b66f4.svg"
                />
              </div>
            </div>
            <p className={styles.text}>{textTwo}</p>
          </div>
          <div className={styles.item05}>
            <div className={styles.icon}>
              <div className={styles.iconCheck}>
                <img
                  alt=""
                  src="https://static.overlay-tech.com/assets/df1f4b86-79df-4d9b-9177-2a6961d35ab7.svg"
                />
              </div>
            </div>
            <p className={styles.textTwo}>{textThree}</p>
          </div>
          <div className={styles.item05}>
            <div className={styles.icon}>
              <div className={styles.iconCheck}>
                <img
                  alt=""
                  src="https://static.overlay-tech.com/assets/7c0ee17f-1f5e-4002-905e-9438a7268dce.svg"
                />
              </div>
            </div>
            <p className={styles.text}>{textFour}</p>
          </div>
          <div className={styles.item05}>
            <div className={styles.icon}>
              <div className={styles.iconCheck}>
                <img
                  alt=""
                  src="https://static.overlay-tech.com/assets/242f89d2-dd6c-488e-9d03-29bb6ee9a3eb.svg"
                />
              </div>
            </div>
            <p className={styles.text}>{textFive}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFeatures;
