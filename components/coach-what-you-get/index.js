import styles from "./index.module.scss";


const ServicesCardItem = ({
  title = "Career Flexibility",
  text = "Having your own coaching business means you have the freedom to independently manage your time, business, and clients.",
  img = "https://static.overlay-tech.com/assets/d631e548-d81b-4b01-9ac1-c14f12291a31.svg"

}) => {
  return (
    <div className={styles.contentView}>
      <div className={styles.content}>
        <img
          alt=""
          className={styles.iconlyBoldTimeCircle}
          src={img}
        />
        <p className={styles.growYourTraffic}>
          {title}
        </p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};


const CoachWhatYouGet = ({
  title = "What you will get"
}) => {
  return (
    <div className={styles.whatYouWillGet}>
      <p className={styles.title}>{title}</p>
      <div className={styles.cards}>
        <ServicesCardItem
          className={styles.servicesCardItem}
        />
        <ServicesCardItem
          title="Follow Your Passion"
          text="The joy you find from helping people meet their
        goals will expand into every area of your life."
          img="https://static.overlay-tech.com/assets/c4a160e7-c3f3-4ec6-a5e6-f26e3e71295f.svg"
          className={styles.servicesCardItem}
        />
        <ServicesCardItem
          title="Be Your Own Boss"
          text="Being a coach awards you the joy of financial freedom and independence."
          img="https://static.overlay-tech.com/assets/0d40c9b8-1f3b-43e6-aeb2-51a6e6d5ecd4.svg"
          className={styles.servicesCardItem}
        />
        <ServicesCardItem
                title="Leave a Legacy"
                text="The peace and stability people find through your coaching sessions allows you to make a valuable contribution to the world."
                img="https://static.overlay-tech.com/assets/53d91f93-d177-4939-8f74-15f16977ad3a.svg"
                className={styles.servicesCardItem}
        />
      </div>
      <p className={styles.description}>
        Flow Coaches know how to support their clients to embrace where
        they are in life and build or construct perspective
        of their past. They help individuals to see their
        past as a resource to learn from while co-creating
        their future as a grounded optimism.
      </p>
    </div>
  );
};

export default CoachWhatYouGet;