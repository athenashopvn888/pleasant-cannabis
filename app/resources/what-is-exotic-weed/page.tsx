import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import pageStyles from "../resources.module.css";
import styles from "./article.module.css";

const TITLE = 'Toronto Exotic Weed: What "Exotic" Means, and What the Label Can Actually Prove';
const CANONICAL = "https://www.pleasantcannabis.ca/resources/what-is-exotic-weed";
const DESCRIPTION =
  "No Canadian law defines exotic weed, so know which parts you can check and which parts you take on trust.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Pleasant Cannabis` },
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  mainEntityOfPage: CANONICAL,
  url: CANONICAL,
  datePublished: "2026-10-28",
  dateModified: "2026-10-28",
  author: { "@type": "Organization", name: "Pleasant Cannabis" },
  publisher: { "@type": "Organization", name: "Pleasant Cannabis" },
  description: DESCRIPTION,
};

export default function WhatIsExoticWeedPage() {
  return (
    <main className={pageStyles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <article>
        <header className={pageStyles.hero}>
          <div className={pageStyles.wrap}>
            <h1>{TITLE}</h1>
            <p className={styles.checked}>Last checked: October 21, 2026</p>
          </div>
        </header>
        <div className={pageStyles.body}>
          <div className={styles.prose}>
            <p>
              &quot;Exotic&quot; is one of the loudest words on a cannabis menu. It sounds rare, imported, a cut above. But if you&apos;ve ever wondered what Toronto exotic weed actually promises, the honest answer starts with a surprise: no Canadian law defines it. It&apos;s a seller&apos;s word. That doesn&apos;t make it meaningless. It means you should know which parts you can check and which parts you&apos;re taking on trust.
            </p>
            <p>Let&apos;s read the fine print together, one layer at a time. This is for adults 19 and over.</p>

            <h2>Layer one: the law has no grade called &quot;exotic&quot;</h2>
            <p>
              Start with what Canada&apos;s cannabis law actually sorts products by. The federal Cannabis Act lists the classes of cannabis that can be sold: dried cannabis, fresh cannabis, cannabis plants, cannabis plant seeds, edible cannabis, cannabis extracts and cannabis topicals.
            </p>
            <p>That&apos;s a list of product types. There&apos;s no rung on it for &quot;exotic&quot;, &quot;premium&quot;, &quot;AAAA&quot; or anything else.</p>
            <p>
              The label rules point the same way. The Cannabis Regulations spell out what must be printed on a package, line by line. A grade isn&apos;t one of those lines. So whatever &quot;exotic&quot; means on a given menu, it comes from the seller, not from the federal rulebook.
            </p>

            <h2>Layer two: what the word is usually pointing at</h2>
            <p>Strip away the hype and &quot;exotic weed&quot; is usually shorthand for things you can see, smell and judge yourself:</p>
            <ul>
              <li>
                <strong>Look.</strong> Bud structure, colour and how much visible frost (trichomes) sits on the surface.
              </li>
              <li>
                <strong>Smell.</strong> How strong and distinct the aroma is when the jar opens.
              </li>
              <li>
                <strong>Trim.</strong> How carefully the buds were trimmed, and how much leaf or stem is left.
              </li>
              <li>
                <strong>Freshness.</strong> How recently it was packaged and how well it&apos;s been stored since.
              </li>
            </ul>
            <p>Notice what isn&apos;t on that list: effects. A menu word can&apos;t promise how anything will feel, and neither can we.</p>
            <p>
              &quot;Premium&quot; works the same way. When people search for premium cannabis Toronto shops carry, they&apos;re hunting for that same mix of look, smell and care. It&apos;s still a menu word, not a federal grade.
            </p>

            <h2>Layer three: what the label proves about Toronto exotic weed</h2>
            <p>The label is where opinion stops and required facts begin. For dried flower sold by weight, a Canadian label has to show:</p>
            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th>Label line</th>
                    <th>What it proves</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Class of cannabis</td>
                    <td>It&apos;s dried cannabis (a legal class), not a grade</td>
                  </tr>
                  <tr>
                    <td>Net weight</td>
                    <td>How many grams are in the package</td>
                  </tr>
                  <tr>
                    <td>Total THC and Total CBD (mg/g)</td>
                    <td>How much THC and CBD the flower could yield per gram, counting THCA and CBDA that can convert</td>
                  </tr>
                  <tr>
                    <td>Packaging date</td>
                    <td>When it was packaged, give or take up to seven days under the rules</td>
                  </tr>
                  <tr>
                    <td>Lot number</td>
                    <td>Which production batch it came from</td>
                  </tr>
                  <tr>
                    <td>Recommended storage conditions</td>
                    <td>How the processor says to keep it</td>
                  </tr>
                  <tr>
                    <td>Brand name and processor contact</td>
                    <td>Who made and packaged it</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              A quick word on Total THC. It&apos;s a required figure, and it&apos;s useful for comparing what&apos;s in one package against another. It is not a quality score, and a bigger number doesn&apos;t make flower &quot;exotic&quot;. We won&apos;t treat it as one.
            </p>

            <h2>Layer four: what the label can&apos;t prove</h2>
            <p>Here&apos;s the gap. Nothing on a federal label tells you:</p>
            <ul>
              <li>how the buds look or smell,</li>
              <li>how they were trimmed,</li>
              <li>whether they were handled gently,</li>
              <li>whether anyone would call them exotic.</li>
            </ul>
            <p>That&apos;s the part you judge with your own eyes and nose, or by asking someone who has seen the product.</p>

            <h2>A self-check before you buy exotic weed</h2>
            <p>Run through this at the counter. It takes a minute.</p>
            <ol>
              <li>
                <strong>Find the packaging date.</strong> Fresher packaging is a fact you can read, not a vibe.
              </li>
              <li>
                <strong>Note the lot number.</strong> Two packs with the same name can come from different batches.
              </li>
              <li>
                <strong>Read Total THC as a measurement</strong>, not a promise.
              </li>
              <li>
                <strong>Check the storage line</strong> and keep the flower that way at home.
              </li>
              <li>
                <strong>Ask to see the flower</strong> if it&apos;s displayed, and judge the look, smell and trim yourself.
              </li>
              <li>
                <strong>Treat &quot;exotic&quot; as a description</strong>, then make up your own mind.
              </li>
            </ol>

            <h2>On our menu</h2>
            <p>
              At Pleasant Cannabis, &quot;Exotic&quot; and &quot;Premium&quot; are the names of flower collections on our menu. They&apos;re how we organize the shelf, not a government stamp, and the label on every package still carries the same required facts as any other legal flower.
            </p>

            <h2>Pleasant Cannabis at Mt Pleasant and Eglinton</h2>
            <p>
              Pleasant Cannabis is at 758 Mt Pleasant Rd, Toronto, near Mt Pleasant Rd and Eglinton Ave E. Drop by at 19+, read the label with us, and decide for yourself what Toronto exotic weed should look and smell like. For arrival notes and the map, see our <Link href="/visit">visit page</Link>.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
