import Head from "next/head";

import styles from "../styles/Home.module.scss";
import SectionBreak from "../components/SectionBreak";
import Top from "../sections/Home/Top";
import AboutSection from "../sections/Home/AboutSection";
import PricingSection from "../sections/Home/PricingSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Turbo Detailing</title>
        <meta
          name="description"
          content="Turbo Detailing | Luxury Mobile Auto Detailing in the Twin Cities Area"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Top />
      <SectionBreak />
      <AboutSection />
      <SectionBreak>Our Pricing</SectionBreak>
      <PricingSection />
      <footer className={styles.footer}>
        &copy; 2023 Turbo Detailing. All rights reserved.
      </footer>
    </div>
  );
}
