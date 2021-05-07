import styles from "./index.module.scss";

const TextArea = ({
    body = "We listen to your needs and challenges, and design a structure that will work for your company. As every individual is unique, so is every company. That’s why our coaching services begins with listening to you and developing a customized plan to support your success."
  }) => {
    return (
      <div className={styles.textArea}>
        <p className={styles.body}>{body}</p>
      </div>
    );
  };
  
  export default TextArea;