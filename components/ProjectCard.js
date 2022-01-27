import { FaGithub } from "react-icons/fa";
import styles from "../styles/Project.module.css";

const ProjectCard = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Spotanew</h1>
      <FaGithub size="1.5rem" color="#333" />
      <p className={styles.description}>
        Discover exciting new music bla bla daljdlakd adjklaj fjaljflak
        foiajfioa feiojfo faojfei afoajfoajfa kefj ejflaj.
      </p>
    </div>
  );
};

export default ProjectCard;
