import styles from "./index.module.scss";

import React from "react";

const Item = ({
  description1 =
  `This Module will train you in the foundational theory
      and practice of coaching. You will learn
      the critical elements of coaching, as noted by the
      International Coaching Federation (ICF): ethics and
      principles, building trust and intimacy, establishing
      agreement, effective goal setting, creating compelling
      futures, creative questions, and more.`,
  description2 =
  `By the end of this Module, you will be able to
        competently conduct a basic coaching session.`,
  subtitle = "Module 1",
  title = "Awareness"
}) => {
  return (
    <div className={styles.itemThree}>
      <div className={styles.details}>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.title}>{title}</p>
        <div className={styles.description}>
          <p className={styles.description}>{description1}</p>
          <p className={styles.descriptionEmphasis2}>{description2}</p>
        </div>
      </div>
    </div>
  );
};


const Header = ({
  title = (
    <>

      <strong className={styles.titleEmphasis1}>
        is comprised of
      </strong>
    </>
  )
}) => {
  return (
    <div className={styles.header}>
      <p className={styles.title2}>{title}</p>
    </div>
  );
};


const CoachModules = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title2}>Our unique coaching methodology</h1>
          <h2 className={styles.titleEmphasis1}>is comprised of</h2>
        </div>
        <div className={styles.modules}>
          <div className={styles.frame987}>
            <Item
              className={styles.item} />
            <Item
              title="Motivation"
              subtitle="Module 2"
              description1={`The Motivation Module will provide you with a deeper understanding how you can motivate and inspire your clients to realise their goals. During this Module, you will learn to recognize your clients’ internal blocks so you can encourage them to overcome these blocks to achieve success.`}
              description2={`The Module will show you how to teach your clients to internally integrate and externally apply the skills and tools they need to overcome the internalized beliefs and fears that prevent them from growing.`}
              className={styles.item} />
            <Item
              title="Motivation"
              subtitle="Module 3"
              description1={`The Creative Planning Module will provide you with the tools to go deeper into the FLOW Coach Methodology. You will learn how to help your clients design solutions to achieve their personal and professional goals. In this Module, theory and practice are integrated using advanced creative tools and strategies.`}
              description2={`You will graduate this Module with a deeper knowledge of FLOW Coaching’s practices, and the ability to empower your clients to move towards meaningful and sustainable life changes.`}
              className={styles.item} />
          </div>
          <div className={styles.frame987}>
            <Item
              title="Achievement"
              subtitle="Module 4"
              description1={`The Achievement Module will enhance your coaching skills to help you support your clients as they move towards achieving sustainable results. You will learn how to help your clients refine their visions and goals, and project their achievements. `}
              description2={`This Module will give you the wisdom to empower and help your clients realise their visions and goals.`}
              className={styles.itemTwo} />
            <Item
              title="Focus"
              subtitle="Module 5"
              description1={`The Focus Module is about focus and resilience. Many people have problems focusing on what is truly important to them, and procrastination is a common challenge to overcome. In this Module, you will learn how to help your clients stay focused on what is truly meaningful to them.`}
              description2={`As a coach, you will learn to create a strong and supportive coaching presence that will keep your clients on track.`}
              className={styles.itemTwo} />
            <Item
              title="Practicum and Supervision"
              subtitle="Module 6"
              description1={`The Practicum and Supervision Module will help you apply what you’ve learned in real-life situations and build the confidence you need to become a professional coach. `}
              description2={`All components of the Practicum and Supervision Module must be completed within one year of starting the Module.`}
              className={styles.itemTwo} />
          </div>
        </div>
      </div>
    </>);
};

export default CoachModules;