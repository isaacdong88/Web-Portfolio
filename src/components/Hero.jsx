import { motion } from "framer-motion";
import styles from "../style";
import ComputerCanvas from "./canvas/Computer";
import CubeCanvas from "./canvas/Cube";

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] mx-auto">
      <div
        className={`${styles.paddingX} sm:absolute relative inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}> I'm Isaac</h1>
          <p className={`${styles.heroSubText}`}>A Software Engineer</p>
        </div>
      </div>
      <CubeCanvas />
    </section>
  );
};

export default Hero;
