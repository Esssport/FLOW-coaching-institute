import styles from "./index.module.scss";


const CoachingSection = ({
  image = "https://static.overlay-tech.com/assets/2e9feba2-feeb-40d7-a94c-df7e29b2333d.png",
  subtitle = "Who should take this path?",
  text = "People who want to build a successful career as a professional coach.",
  textFour = "Managers who want to transform themselves into leaders.",
  textThree = "Consultants &amp; facilitators who want to integrate coaching into their business.",
  textTwo = "Professionals who want to expand their career.",
  title = "I Want to Be a Coach"
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
                  src="https://static.overlay-tech.com/assets/8cedd81f-0e51-4842-9ab8-767173154fa4.svg"
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
                  src="https://static.overlay-tech.com/assets/63c136fa-8ea2-4dd1-a9e7-4aea948aa3a4.svg"
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
                  src="https://static.overlay-tech.com/assets/a5df9977-fb06-460e-b26f-a6749ead492d.svg"
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
                  src="https://static.overlay-tech.com/assets/1ebfa63b-45e4-4676-8243-d3ee2ac93fd5.svg"
                />
              </div>
            </div>
            <p className={styles.text}>{textFour}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingSection;