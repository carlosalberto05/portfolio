import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                I&apos;m a web developer with experience creating and supporting
                applications using JavaScript and React JS. I worked as a web
                programmer for the public sector in the Infonavit project,
                standing out for the effective resolution of assigned tasks. I
                am recognized for my persistence, critical thinking and my
                ability to find solutions. My proactive approach, empathy and
                self-discipline reinforce my ability to work independently and
                collaborate effectively in multidisciplinary teams.{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
