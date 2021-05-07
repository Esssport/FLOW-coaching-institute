import styles from "./index.module.scss";

const Item = () => {
  return (
    <div className={styles.item}>
      <div className={styles.details}>
        <p className={styles.subtitle}>Corporate Service</p>
        <p className={styles.title}>
          MENTORSHIP IN THE WORKPLACE
        </p>
        <p className={styles.description}>
          Managers are the core of every organization and
          are responsible for the development of 80 percent
          of the workforce. Imagine if your business had a
          whole team of high-performing managers who were
          able to use their knowledge, experience, and
          wisdom to encourage their employees to also be
          high performers!
          <br />
          <br />
          Our Mentorship in the Workplace program focuses on
          creating a mentorship culture through managers
          within the organization. The FLOW Coaching
          Institute understands that mentorship is the most
          effective tool to keep and transfer share
          experience and, knowledge, and know-how throughout
          the organization. Mentorship is also a way to
          overcome generational gap and can help. When it is
          positioned right, mentorship helps to create a
          learning organization centered around learning and
          professional growth. Our mentorship program is
          customized according to the needs of each
          organization.
        </p>
      </div>
    </div>
  );
};

export default Item;