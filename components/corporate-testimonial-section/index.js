import styles from "./index.module.scss";

const TestimonialSection = () => {
  return (
    <div className={styles.testimonialSection}>
      <div className={styles.contentView}>
        <div className={styles.profile}>
          <img
            alt=""
            className={styles.image}
            src="https://static.overlay-tech.com/assets/f47a4f83-86a2-436b-abec-16750b534ee6.png"
          />
          <p className={styles.label}>
            <strong className={styles.labelEmphasis0}>
              Michelle Purdue
              <br />
            </strong>
            Human Resources Director
          </p>
        </div>
        <p className={styles.body}>
          &#34;We have trained our Store Managers as
          &#34;Coaching Managers&#34; with FLOW Coaching
          Institute.{" "}
          <strong className={styles.bodyEmphasis1}>
            Since completing the program, our in-store
            employee engagement scores has increased by %
            40.{" "}
          </strong>
          On top of that, when we did in-debth interviews to
          understand the reason behind such increase, the
          employees indicated that, with the new management
          style, they have been feeling more appreciated and
          invested even at times where they get constructive
          criticism from their managers&#34;
        </p>
      </div>
    </div>
  );
};

export default TestimonialSection;