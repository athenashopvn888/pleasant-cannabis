import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import pageStyles from "../resources.module.css";
import styles from "./article.module.css";

const TITLE = "What Is a Bubbler Pipe? The Midtown Guide to the Pipe-Bong Hybrid";
const CANONICAL = "https://www.pleasantcannabis.ca/resources/what-is-a-bubbler-pipe";
const DESCRIPTION =
  "Somewhere between a hand pipe and a full bong lives a bubbler: small enough for a Midtown shelf, but with water in it.";

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
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
  author: { "@type": "Organization", name: "Pleasant Cannabis" },
  publisher: { "@type": "Organization", name: "Pleasant Cannabis" },
  description: DESCRIPTION,
};

export default function WhatIsABubblerPipePage() {
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
            <p className={styles.checked}>Last checked: October 30, 2026</p>
          </div>
        </header>
        <div className={pageStyles.body}>
          <div className={styles.prose}>
            <p>
              Somewhere between a hand pipe and a full bong lives a piece that confuses plenty of people: the bubbler. Small enough for a shelf in a Midtown condo, but with water in it. So <strong>what is a bubbler pipe</strong>, exactly, and how is it different from the glass you already know? Let&apos;s read the fine print together. For adults 19+, with no product picks and no claims about effects.
            </p>

            <h2>What is a bubbler pipe?</h2>
            <p>
              A bubbler is a hand pipe with a small water chamber built into its body. You pack the bowl, light it, and when you pull, the smoke passes through the water before it reaches the mouthpiece. That&apos;s the &quot;bubble&quot; in the name. Think of it as a hand pipe that borrowed one idea from a bong.
            </p>
            <p>Most bubblers are a single piece of glass. Unlike most bongs, the bowl usually doesn&apos;t come out.</p>

            <h2>The parts, layer by layer</h2>
            <ol>
              <li>
                <strong>Bowl:</strong> the cup you pack with broken-up flower.
              </li>
              <li>
                <strong>Carb:</strong> a small hole on the side. Cover it while you light and pull, then uncover it to clear the chamber.
              </li>
              <li>
                <strong>Downstem (inside):</strong> a short tube that carries smoke from the bowl down into the water.
              </li>
              <li>
                <strong>Water chamber:</strong> the belly of the piece.
              </li>
              <li>
                <strong>Mouthpiece:</strong> where you pull.
              </li>
            </ol>
            <p>
              Some bubblers add a percolator, a small diffuser inside the chamber that splits the smoke into more bubbles. It&apos;s a design feature, not a requirement.
            </p>

            <h2>Bubbler vs hand pipe vs bong</h2>
            <p>Here&apos;s the honest comparison, no rankings:</p>
            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Hand pipe</th>
                    <th>Bubbler</th>
                    <th>Bong</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Water</td>
                    <td>None</td>
                    <td>Small chamber</td>
                    <td>Large chamber</td>
                  </tr>
                  <tr>
                    <td>Size</td>
                    <td>Pocket</td>
                    <td>Palm to forearm</td>
                    <td>Tabletop</td>
                  </tr>
                  <tr>
                    <td>Removable bowl</td>
                    <td>No</td>
                    <td>Usually no</td>
                    <td>Usually yes</td>
                  </tr>
                  <tr>
                    <td>Cleaning</td>
                    <td>Quick</td>
                    <td>Fiddly</td>
                    <td>Most parts, but they come apart</td>
                  </tr>
                  <tr>
                    <td>Spill risk</td>
                    <td>None</td>
                    <td>Some</td>
                    <td>Some</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>The bubbler sits in the middle on every row. That&apos;s the whole point of it.</p>

            <h2>How to use a bubbler</h2>
            <ol>
              <li>
                <strong>Fill it with water.</strong> Pour water in through the mouthpiece until the internal downstem sits just under the surface. Too much and water reaches your mouth. Too little and nothing bubbles.
              </li>
              <li>
                <strong>Pack the bowl.</strong> Break your flower up evenly and pack it loose.
              </li>
              <li>
                <strong>Cover the carb.</strong> Thumb over the side hole.
              </li>
              <li>
                <strong>Light and pull.</strong> Angle the flame at one edge of the bowl and pull gently.
              </li>
              <li>
                <strong>Release the carb.</strong> Uncover the hole to clear the chamber.
              </li>
              <li>
                <strong>Empty the water.</strong> Fresh water every session.
              </li>
            </ol>
            <p>
              A quick dry pull before lighting tells you whether the water level is right. If you hear gurgling at your lips, tip a little out.
            </p>

            <h2>Cleaning a bubbler</h2>
            <p>
              The single-piece build is the bubbler&apos;s weak spot: nothing comes apart. Fill it with isopropyl alcohol and coarse salt, plug the openings, and shake. Then rinse with warm water until there&apos;s no alcohol smell left and let it dry fully before the next use. Never mix boiling water with cold glass.
            </p>

            <h2>Condo and rental notes</h2>
            <p>
              Our neighbours in Midtown live in buildings with their own rules, and those rules apply whatever the piece looks like. If your lease or condo declaration restricts smoking indoors, a bubbler doesn&apos;t change that. Read your documents first. On the practical side, bubblers can tip and spill, so a stable surface and a towel nearby save a carpet.
            </p>

            <h2>Who tends to ask about bubblers?</h2>
            <p>
              People who use a hand pipe and want the water feature without a tabletop piece, and people who own a bong but want something smaller. Neither group is wrong. It comes down to size, storage and how much cleaning you&apos;re willing to do.
            </p>

            <h2>Quick answers</h2>
            <p>
              <strong>What is a bubbler pipe made of?</strong> Usually borosilicate glass. Silicone versions exist too.
            </p>
            <p>
              <strong>Is a bubbler the same as a mini bong?</strong> Close, but a mini bong usually has a removable bowl and a flat base.
            </p>
            <p>
              <strong>Do I need a percolator?</strong> No. It&apos;s optional.
            </p>

            <h2>Keep reading at Mount Pleasant</h2>
            <p>
              New to flower formats? Our <Link href="/resources/weed-flower-guide">weed flower guide</Link> covers the basics, our <Link href="/resources/what-is-exotic-weed">exotic weed explainer</Link> decodes menu words, and the <Link href="/resources/mount-pleasant-midtown-visit-guide">Mount Pleasant visit guide</Link> covers getting to Pleasant Cannabis at 758 Mt Pleasant Rd, near Mt Pleasant Rd and Eglinton Ave E. Adults 19+ only. Bring government-issued photo ID.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
