import { motion } from "framer-motion";
import Link from "next/link";
import { Fonts } from "../bin/fonts";
import styles from "../styles/components/Navbar.module.scss";
import linkStyles from "../styles/components/Text/Link.module.css";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, type: "spring" } }}
      className={styles.navbar_main}
    >
      <Link
        href="/"
        className={`${linkStyles["hover-animation"]} ${Fonts.title} ${styles.logoText}`}
      >
        <b>TURBO</b>
      </Link>

      <a></a>
      <div className={"flex-row"}>
        <Link
          href="/pricing"
          className={linkStyles["hover-animation"]}
          style={{ marginRight: "2.5rem" }}
        >
          Pricing
        </Link>
        <Link
          href="/faq"
          className={linkStyles["hover-animation"]}
          style={{ marginRight: "2.5rem" }}
        >
          FAQ
        </Link>
        <Link href="/contact" className={linkStyles["hover-animation"]}>
          Contact
        </Link>
      </div>
    </motion.nav>
  );
}

export default Navbar;
