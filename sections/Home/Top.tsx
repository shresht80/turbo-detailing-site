import { motion, useScroll } from "framer-motion";
import AccentedTitle from "../../components/titles/AccentedTitle";
import Subtitle from "../../components/titles/Subtitle";
import styles from "../../styles/Home.module.scss";

function Top() {
  const { scrollYProgress } = useScroll();

  console.log(scrollYProgress);
  return (
    <main className={styles.main}>
      <div>
        <AccentedTitle>Turbo</AccentedTitle>
        <Subtitle>Luxury Detailing</Subtitle>
        <motion.p
          className={styles.scrollSign}
          // style={{ opacity: 1 - 0.01 * Number(scrollYProgress) }}
        >
          SCROLL <p className={styles.scrollSignBar}>━━━</p>
        </motion.p>
      </div>
    </main>
  );
}

export default Top;
