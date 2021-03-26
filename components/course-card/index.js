import styles from "./index.module.scss";


const courseCard = ({
  headerImage = "https://static.overlay-tech.com/assets/dc7a2bed-01f9-4481-8412-43b1b155b6ff.png",
  subtitle = "Components is a way to inherit customization quickly and spread it to the parent items. ",
  text = "Components-driven design system",
  textFive = "Perfect kit to learn components in Figma",
  textFour = "Themed into 3 different styles, colors and fonts",
  textThree = "Awesome outlined Feather icons pack",
  textTwo = "Variety of eye-catching landing templates",
  title = "Live Online Group Classes"
}) => {
  return (
    <div className={styles.cardOne}>
      <img
        alt=""
        className={styles.headerImage}
        src={headerImage}
      />
      <div className={styles.frame988}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.item05}>
          <div className={styles.checkIcon}>
            <div className={styles.iconCheck}>
              <img
                alt=""
                src="https://static.overlay-tech.com/assets/1f93190c-c2a8-4852-b69b-98478994401c.svg"
              />
            </div>
          </div>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.item05}>
          <div className={styles.checkIconTwo}>
            <div className={styles.iconCheck}>
              <img
                alt=""
                src="https://static.overlay-tech.com/assets/b56d924d-1a84-4d6f-88a0-54bd9357dcdf.svg"
              />
            </div>
          </div>
          <p className={styles.text}>{textTwo}</p>
        </div>
        <div className={styles.item05}>
          <div className={styles.checkIconTwo}>
            <div className={styles.iconCheck}>
              <img
                alt=""
                src="https://static.overlay-tech.com/assets/71bc2be4-d5e5-4078-974d-525002b8604b.svg"
              />
            </div>
          </div>
          <p className={styles.text}>{textThree}</p>
        </div>
        <div className={styles.item05}>
          <div className={styles.checkIconTwo}>
            <div className={styles.iconCheck}>
              <img
                alt=""
                src="https://static.overlay-tech.com/assets/e31c0b74-8a1a-49d5-9691-b4c7140314e4.svg"
              />
            </div>
          </div>
          <p className={styles.text}>{textFour}</p>
        </div>
        <div className={styles.item05}>
          <div className={styles.checkIconTwo}>
            <div className={styles.iconCheck}>
              <img
                alt=""
                src="https://static.overlay-tech.com/assets/f91123a1-19ed-488a-a214-0ffdc63ce4a6.svg"
              />
            </div>
          </div>
          <p className={styles.text}>{textFive}</p>
        </div>
      </div>
    </div>
  );
};

export default courseCard;