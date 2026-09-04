import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../resources.module.css";

const canonical = "https://www.pleasantcannabis.ca/resources/cannabis-dispensary-vs-weed-dispensary";

export const metadata: Metadata = {
  title: { absolute: "Cannabis Store vs Weed Dispensary | Pleasant Cannabis" },
  description:
    "Weed dispensary, cannabis dispensary or dispensary near me? Learn how these local-search terms connect at Pleasant Cannabis in Toronto.",
  alternates: { canonical },
  robots: { index: true, follow: true },
};

export default function CannabisDispensaryVsWeedDispensaryPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <h1>Cannabis, Weed, Store or Dispensary — What Are People Looking For?</h1>
          <p className={styles.intro}>
            Customers rarely think in exact SEO phrases. They use whichever words feel natural: cannabis, weed, cannabis store, weed dispensary, or simply dispensary. For a local business, the useful job of a website is to connect those words to one clear real-world location without forcing repetitive keyword language.
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <article className={styles.section}>
          <h2>One Local Intent, Several Search Phrases</h2>
          <p>Someone may search:</p>
          <ul>
            <li>“weed dispensary near me”</li>
            <li>“cannabis dispensary near me”</li>
            <li>“dispensary near me”</li>
            <li>“cannabis store near me”</li>
          </ul>
          <p>
            The phrases should not be treated as one literal keyword, but they clearly belong to a related local-search topic. The best website response is a strong real business entity, useful local information, and natural language that reflects how people actually search.
          </p>
        </article>

        <article className={styles.section}>
          <h2>Why the Local Page Still Leads</h2>
          <p>
            The purpose of this article is educational. It explains the relationship among dispensary, cannabis dispensary, weed dispensary and cannabis store.
          </p>
          <p>
            For real visit intent in Toronto, Pleasant Cannabis should continue directing users to the existing canonical <Link href="/weed-dispensary-toronto">local/store page</Link>, where the business’s verified location information belongs.
          </p>
        </article>

        <article className={styles.section}>
          <h2>Frequently Asked Questions</h2>
          <h3>Is a weed dispensary different from a cannabis dispensary?</h3>
          <p>Usually the main difference is wording. Cannabis is the more formal term, while weed is common conversational language.</p>

          <h3>Does “dispensary near me” include cannabis dispensaries?</h3>
          <p>In a cannabis-related search context, people commonly use the shorter phrase to look for a nearby cannabis dispensary.</p>

          <h3>Is “cannabis store near me” related?</h3>
          <p>Yes. Cannabis store is another common way to describe a nearby cannabis retail business.</p>

          <h3>Should every keyword variation have a separate page?</h3>
          <p>No. Closely related local-search phrases are generally better supported by a strong local page plus useful supporting content than by multiple thin duplicate pages.</p>
        </article>
      </section>
      <Footer />
    </main>
  );
}
