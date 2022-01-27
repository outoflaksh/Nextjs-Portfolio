import styles from "../styles/common.module.css";

import { FaSkiing } from "react-icons/fa";

const About = () => {
  return (
    <div className={styles.container}>
      <i className={styles.icon}>
        <FaSkiing size="2rem" color="#FFEECB" />
      </i>
      <section className={`${styles.main} ${styles.border}`}>
        <h1 className={styles.heading}>My Tech Journey:</h1>
        <h3 className={`${styles.subheading} ${styles.mono}`}>
          Frontend dev turned Backend dev turned Full Stack dev
        </h3>
        <p className={styles.paragraph}>
          Like a lot of beginners, I started my journey by building simple
          static sites using HTML & CSS. Then, JavaScript came along to make
          things jazzier.
          <p>
            Then, I discovered Python and my world expanded as I delved in
            software development, machine learning, and backend development.
            That is until, recently, when my old passion for frontend reignited
            with React.
          </p>
          <p>
            Now, I spend my time developing full-stack web applications using
            technologies like React, Next, Express, FastAPI, Flask, MongoDB, and
            PostgreSQL.
          </p>
        </p>
      </section>
    </div>
  );
};

export default About;
