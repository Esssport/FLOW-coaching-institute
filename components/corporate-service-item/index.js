import PrimaryButton from "../button-primary";
import styles from "./index.module.scss";

const CorporateServiceItem = ({
    body = "There is no universal formula for building a great team because every team is different. <br /> The variety of skills, abilities, habits, personalities, and goals make a one-size-fits-all approach ineffective when creating a team-building strategy. <br /> Our team coaching provides a more customized approach to help you develop your team as a whole while capitalizing on their individual talents and strengths. Depending on your needs and goals, team coaching may or may not start with a team assessment.",
    image = "https://static.overlay-tech.com/assets/853d6986-1be1-4ff7-bc82-9c58a8e71b2f.png",
    title = "TEAM COACHING"
  }) => {
    return (
      <div className={styles.corporateService}>
        <img alt="" className={styles.image} src={image} />
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.body}>{body}</p>
          <PrimaryButton className={styles.primaryButton} />
        </div>
      </div>
    );
  };
  
  export default CorporateServiceItem;