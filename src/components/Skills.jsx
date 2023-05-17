import React from "react";
import styles from "../style";

function Skills() {
  return (
    <section className="relative w-full h-[70vh] mx-auto sm:flex flex-wrap">
      <div
        className={`${styles.paddingX} sm:absolute relative inset-0 sm:top-[10px] top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText}`}>Skills</h1>
          <p className={`${styles.heroSubText}`}>A Software Engineer</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
