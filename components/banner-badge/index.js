import styles from "./index.module.scss";

// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f


// import { LearnmoreBtn1 } from "components";

const CredlyBadgeBanner = ({
  badgeIcon = "https://static.overlay-tech.com/assets/47c1d39d-e1ff-4be0-9ed0-7f055a9c22a0.png",
  contactUsBtn = "Contact us for more",
  description = "Earn and share a digital certificate on this course once you complete it. Share it on Linkedin platforms easily.",
  title = "Get your badge now"
}) => {
  return (
    <div className={styles.credlyBadgeBanner}>
      <div className={styles.buttons}>
        {/* <LearnmoreBtn1 className={styles.learnmoreBtn1} /> */}
        <p className={styles.contactUsBtn}>
          {contactUsBtn}
        </p>
      </div>
      <div className={styles.flexWrapperOne}>
        <div className={styles.content}>
          <img
            alt=""
            className={styles.badgeIcon}
            src={badgeIcon}
          />
          <div className={styles.textContent}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredlyBadgeBanner;
