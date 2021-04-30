import styles from "./index.module.scss";
import Input from "../input"
import PrimaryButton from "../button-primary"
import Select from "../select"
import Textarea from "../textarea"

const ContactUSForm = () => {
  return (
    <div className={styles.contactFormSection}>
      <p className={styles.title}>
        Contact our support team
      </p>
      <p className={styles.description}>
        We&#039;re happy to answer your request. Our team
        will get back to you as soon as possible.
      </p>
      <div className={styles.contactForm}>
        <div className={styles.flexWrapperOne}>
          <Input className={styles.input} text='Your Name'/>
          <Input text='E-Mail Address'/>
        </div>
        <div className={styles.flexWrapperTwo}>
          <Input className={styles.inputTwo} text='Phone'/>
          <Select className={styles.inputTwo} text='How Can We Help You?'/>
        </div>
        <div className={styles.flexWrapperThree}>
          <Select className={styles.inputTwo} text='Choose Your Country'/>
          <Select className={styles.inputTwo} text='Choose Your City'/>
        </div>
        <Textarea className={styles.inputThree} text='Message'/>
        <PrimaryButton className={styles.primaryButton} />
      </div>
    </div>
  );
};

export default ContactUSForm;