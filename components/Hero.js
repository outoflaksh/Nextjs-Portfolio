import styles from "../styles/Hero.module.css";
import commonStyles from "../styles/common.module.css";

import { GiUfo } from "react-icons/gi";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { BsChevronDoubleDown } from "react-icons/bs";

const Hero = () => {
  return (
    <section className={commonStyles.container}>
      <div>
        <section className={styles.info}>
          <GiUfo color="#61ECBC" size="3.5rem" />
          <h3>Hello, world. I am</h3>
          <h1>Lakshya Malik</h1>
          <h2>{"<software developer/>"}</h2>
        </section>

        <section className={styles.skills}>
          <h4>My primary tech stack:</h4>
          <div className={styles.skill_icons}>
            <li className={styles.skill_icon}>
              <FaPython color="#B6CBFF" size="4rem" />
            </li>
            <li className={styles.skill_icon}>
              <FaNodeJs color="#B6CBFF" size="4rem" />
            </li>
            <li className={styles.skill_icon}>
              <FaReact color="#B6CBFF" size="4rem" />
            </li>
            <li className={styles.skill_icon}>
              <SiExpress color="#B6CBFF" size="4rem" />
            </li>
            <li className={styles.skill_icon}>
              <SiMongodb color="#B6CBFF" size="4rem" />
            </li>
          </div>
        </section>
        <BsChevronDoubleDown
          color="#FFEECB"
          size="2rem"
          className={styles.scroll_icon}
        />
      </div>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
    </section>
  );
};

export default Hero;
