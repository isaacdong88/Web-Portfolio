import React from "react";
import styles from "../style";

function Projects() {
  return (
    <section className="relative w-full h-[50vh] mx-auto sm:flex flex-wrap">
      <div
        className={`${styles.paddingX} sm:absolute relative inset-0 top-[10px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText}`}>Projects</h1>
          <p className={`${styles.heroSubText}`}>A Software Engineer</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
