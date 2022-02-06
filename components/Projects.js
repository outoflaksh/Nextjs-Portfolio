import styles from "../styles/common.module.css";
import projectStyles from "../styles/Project.module.css";

import ProjectCard from "./ProjectCard";

import { FaRocket } from "react-icons/fa";

const projectData = [
  {
    title: "Spotanew",
    description:
      "Discover new music by listening to the best parts of a randomly selected song among more than 1,000 songs spanning a dozen different genres.",
  },
  {
    title: "Feather: Blog App",
    description:
      "Built a Markdown blog web app complete with a user model, custom profile pages, and dynamic routes.",
  },
  {
    title: "Tenflix",
    description:
      "Get top 10 most similar content recommendations based on plot details of a user-selected Netflix title; calculated on a dataset of over 7000 different titles.",
  },
];

const Projects = () => {
  return (
    <div className={styles.container}>
      <i className={styles.icon}>
        <FaRocket size="2rem" color="#FFEECB" />
      </i>
      <section className={styles.main}>
        <h1 className={styles.heading}>What I've built so far:</h1>
        <section className={projectStyles.cards}>
          {projectData.map((project, idx) => (
            <ProjectCard details={project} key={idx} />
          ))}
        </section>
        <h1 className={styles.heading}>...and many more to come</h1>
      </section>
    </div>
  );
};

export default Projects;
