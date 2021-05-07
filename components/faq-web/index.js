import FaqItem from "../faq-item";
import styles from "./index.module.scss";

const FAQWeb = () => {
  return (
    <div className={styles.faqWeb}>
      <p className={styles.sectionTitle}>
        Frequently Asked Questions
      </p>
      <div className={styles.contentView}>
        <div className={styles.leftSide}>
          <div className={styles.flexWrapperTwo}>
            <FaqItem className={styles.faqItem} />
            <FaqItem className={styles.faqItemTwo} />
          </div>
          <FaqItem className={styles.faqItemThree} />
          <FaqItem className={styles.faqItemFour} />
          <div className={styles.flexWrapperTwo}>
            <FaqItem className={styles.faqItem} />
            <FaqItem className={styles.faqItemTwo} />
          </div>
          <div className={styles.flexWrapperTwo}>
            <FaqItem className={styles.faqItem} />
            <FaqItem className={styles.faqItemTwo} />
          </div>
          <div className={styles.flexWrapperTwo}>
            <FaqItem className={styles.faqItem} />
            <FaqItem className={styles.faqItemTwo} />
          </div>
          <div className={styles.flexWrapperTwo}>
            <FaqItem className={styles.faqItem} />
            <FaqItem className={styles.faqItemTwo} />
          </div>
          <div className={styles.flexWrapperTwo}>
            <FaqItem className={styles.faqItem} />
            <FaqItem className={styles.faqItemTwo} />
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.leftSide}>
          <div className={styles.flexWrapperTwo}>
            <FaqItem className={styles.faqItem} />
            <FaqItem className={styles.faqItemTwo} />
          </div>
          <div className={styles.flexWrapperTwo}>
            <FaqItem className={styles.faqItem} />
            <FaqItem className={styles.faqItemTwo} />
          </div>
          <div className={styles.flexWrapperTwo}>
            <FaqItem className={styles.faqItem} />
            <FaqItem className={styles.faqItemTwo} />
          </div>
          <FaqItem className={styles.faqItemFive} />
          <div className={styles.flexWrapperTwo}>
            <FaqItem className={styles.faqItem} />
            <FaqItem className={styles.faqItemTwo} />
          </div>
          <div className={styles.flexWrapperTwo}>
            <FaqItem className={styles.faqItem} />
            <FaqItem className={styles.faqItemTwo} />
          </div>
          <div className={styles.flexWrapperTwo}>
            <FaqItem className={styles.faqItem} />
            <FaqItem className={styles.faqItemTwo} />
          </div>
          <div className={styles.flexWrapperTwo}>
            <FaqItem className={styles.faqItem} />
            <FaqItem className={styles.faqItemTwo} />
          </div>
          <div className={styles.flexWrapperTwo}>
            <FaqItem className={styles.faqItem} />
            <FaqItem className={styles.faqItemTwo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQWeb;