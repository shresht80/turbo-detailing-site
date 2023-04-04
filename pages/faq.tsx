import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Spacer from "../components/Spacer";
import AccentedTitle from "../components/titles/AccentedTitle";
import styles from "../styles/Home.module.scss";

function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ - Turbo Detailers</title>
        <meta
          name="description"
          content="FAQ. Learn more about Luxury Mobile Auto Detailing, or what we have to offer for you!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Spacer height={1.75} />

        <AccentedTitle>Contact</AccentedTitle>
        <Spacer height={3} />

        <ContactForm />
      </main>
    </>
  );
}

export default FAQPage;
