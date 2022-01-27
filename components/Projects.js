import styles from "../styles/common.module.css";
import projectStyles from "../styles/Project.module.css";

import ProjectCard from "./ProjectCard";

import { FaRocket } from "react-icons/fa";

const Projects = () => {
  return (
    <div className={styles.container}>
      <i className={styles.icon}>
        <FaRocket size="2rem" color="#FFEECB" />
      </i>
      <section className={styles.main}>
        <h1 className={styles.heading}>What I've built so far:</h1>
        <section className={projectStyles.cards}>
          <ProjectCard />

          <ProjectCard />
          <ProjectCard />
        </section>
        <h1 className={styles.heading}>...and many more to come</h1>
      </section>
    </div>
  );
};

export default Projects;
