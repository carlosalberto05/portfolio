import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:carlos_alberto-lira@outlook.com">
            carlos_alberto-lira@outlook.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/carlos-alberto-lira/">
            https://www.linkedin.com/in/carlos-alberto-lira
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/carlosalberto05">
            https://github.com/carlosalberto05
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
