import styles from "./index.module.scss";

const FaqItemOpenWeb = () => {
  return (
    <div className={styles.faqItem}>
      <div className={styles.relativeWrapperOne}>
        <div className={styles.questionBackground} />
        <p className={styles.questionLabel}>
          Amet minim mollit non deserunt ullamco est sit
          aliqua dolor do amet sint?
        </p>
        <img
          alt=""
          className={styles.iconlyBoldInfoCircle}
          src="https://static.overlay-tech.com/assets/bc960da4-8ab4-47ec-893b-2b8dc7873300.svg"
        />
        <img
          alt=""
          className={styles.iconlyBoldArrowDown2}
          src="https://static.overlay-tech.com/assets/317e725d-6642-4ae7-bf9e-a90c87d7987e.svg"
        />
      </div>
      <div className={styles.flexWrapperOne}>
        <p className={styles.answerLabel}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Amet massa ac egestas in massa sodales est
          diam hac. Tellus cras eros, diam adipiscing.
          Molestie interdum nunc viverra feugiat tortor.
          Venenatis donec ipsum ultrices nulla amet enim
          convallis ultricies porttitor.
        </p>
      </div>
    </div>
  );
};

export default FaqItemOpenWeb;