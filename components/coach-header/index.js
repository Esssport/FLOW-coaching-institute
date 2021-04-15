import styles from "./index.module.scss";

const coachHeader = ({
  images = "https://static.overlay-tech.com/assets/4b4a948f-8602-482b-995d-c62e51686b5d.png",
  label = "Sigmund Freud",
  labelThree = "Martin Seligman",
  labelTwo = "Mihaly Csikszentmihalyi",
  subtitle = "The road to becoming the type of coach you were called upon is paved with science. ",
  textArea = "So much so that we developed a unique methodology focused on positive psychology and its 3 main pillars. <br /> <br /> In 1998 Positive Psychology became a scientific area of study. Now considered as the pioneers of Positive Psychology Martin Seligman and Mihaly Csikszentmihalyi clearly drew a line between the disease model of the early psychologists and the positive model that we understand today. Before Positive Psychology, for years, psychologists had studied the human psyche and classified groups of behaviors and attitudes into illnesses, diseases or disorders.<br /> <br /> Our method is part of the change where we’re not putting people’s defects in the spotlight, as the modern psychology practice required. Rather, we’re focused on the character strengths and behaviors that allow you and your clients to build a life of meaning and purpose. Not only will you learn how to be in the coaching seat, but you’ll also get to experience what being coached truly means. <br /> ",
  title = "Get to the heart of coaching through positive psychology"
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.textView}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.textArea}>{textArea}</p>
      </div>
      <div className={styles.imageView}>
        <p className={styles.label}>{label}</p>
        <img
          alt=""
          className={styles.images}
          src={images}
        />
        <div className={styles.flexWrapperOne}>
          <p className={styles.labelTwo}>{labelTwo}</p>
          <p className={styles.labelThree}>{labelThree}</p>
        </div>
      </div>
    </div>
  );
};

export default coachHeader;