import Head from "next/head";

import styles from "../styles/Home.module.scss";
import SectionBreak from "../components/SectionBreak";
import Top from "../sections/Home/Top";
import AboutSection from "../sections/Home/AboutSection";
import PricingSection from "../sections/Home/PricingSection";
import FAQ from "../components/FAQ";
import faqList from "../data/faq.json";
import Spacer from "../components/Spacer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Turbo Mobile Auto Detailing - Turbo Detailers</title>
        <meta
          name="description"
          content="Turbo Mobile Auto Detailing aims to give you the best car detailing experience in the comfort of your own home. Located in the Twin Cities Area, we come to you!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Top />
      <SectionBreak />
      <AboutSection />
      <SectionBreak>Our Pricing</SectionBreak>
      <PricingSection />
      <Spacer height={3} />
      <SectionBreak>Turbo FAQs</SectionBreak>
      <FAQ faqList={faqList} />
    </div>
  );
}
