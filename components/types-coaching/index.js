import styles from "./index.module.scss";
import CoachingSection from "../coaching-section"

const TypesCoaching = ({
  sectionSubtitle = "If you want to start an exciting coaching career, the expert coaches at the FLOW Coaching Institute have the experience, knowledge, and accreditation to provide the best training possible.",
  sectionTitle = "Become a FLOW Coach and launch your new career"
}) => {
  return (
    <div className={styles.aboutChooseCoachingType}>
      <div className={styles.header}>
        <p className={styles.sectionTitle}>
          {sectionTitle}
        </p>
        <p className={styles.sectionSubtitle}>
          {sectionSubtitle}
        </p>
      </div>
      <CoachingSection className={styles.featuresSection} />
      <CoachingSection 
      className={styles.featuresSection} 
      imageOne = "https://static.overlay-tech.com/assets/514bb747-bbcf-4ee7-8acf-0c28f8c69bcf.png"
      subtitleOne = "Who should take this path?"
      textOne = "Engage your people on shared goals towards success."
      textTwo = "Transform your managers into leaders."
      textThree = "Build powerful teams aligned towards the same vision."
      textFour = "Co-create a positive coaching culture within your organization."
      titleFive = "Coaching for Corporations"
      />
    </div>
  );
};

export default TypesCoaching;