import { FaGithub } from "react-icons/fa";
import styles from "../styles/Project.module.css";

const ProjectCard = ({ details }) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{details.title}</h1>
      <FaGithub size="1.5rem" color="#333" />
      <p className={styles.description}>{details.description}</p>
    </div>
  );
};

export default ProjectCard;
