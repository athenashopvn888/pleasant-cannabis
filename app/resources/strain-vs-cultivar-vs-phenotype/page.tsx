import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import pageStyles from "../resources.module.css";
import styles from "./article.module.css";

const TITLE = "Strain vs Cultivar vs Phenotype: The Naming Words on Every Menu, Decoded";
const CANONICAL = "https://www.pleasantcannabis.ca/resources/strain-vs-cultivar-vs-phenotype";
const DESCRIPTION =
  "Menus call it a strain, growers call it a cultivar: same plant, three different words.";

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
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  author: { "@type": "Organization", name: "Pleasant Cannabis" },
  publisher: { "@type": "Organization", name: "Pleasant Cannabis" },
  description: DESCRIPTION,
};

export default function StrainVsCultivarVsPhenotypePage() {
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
            <p className={styles.checked}>Last checked: October 25, 2026</p>
          </div>
        </header>
        <div className={pageStyles.body}>
          <div className={styles.prose}>
            <p>
              Menus call it a strain. Growers call it a cultivar. Somebody on a forum calls it &quot;a killer pheno&quot;. Same plant, three different words. Pleasant Cannabis, at 758 Mt Pleasant Rd near Mt Pleasant Rd and Eglinton Ave E, decodes <strong>strain vs cultivar</strong> vs phenotype for adults 19+. No strain names here, just the vocabulary behind them.
            </p>

            <h2>Strain vs cultivar: the short answer</h2>
            <p>
              <strong>Strain</strong> is the everyday word. It&apos;s what most menus and most people use for a named variety of cannabis.
            </p>
            <p>
              <strong>Cultivar</strong> is short for &quot;cultivated variety&quot;. It&apos;s the horticultural term for a plant variety selected and maintained by growers. Plenty of people in the industry prefer it, because &quot;strain&quot; is technically a microbiology word, used for bacteria and viruses.
            </p>
            <p>In practice, on a menu, they mean roughly the same thing: a named plant variety.</p>

            <h2>Phenotype: the plant you actually get</h2>
            <p>
              A <strong>phenotype</strong> is the set of traits a plant actually shows: its shape, colour, aroma and how it grows. Those traits come from the plant&apos;s genetics (its genotype) interacting with its environment.
            </p>
            <p>
              So two seeds from the same parents can grow into plants that look and smell different. Each is a different phenotype. Growers often &quot;hunt&quot; through many plants to pick one phenotype they want to keep.
            </p>

            <h2>Genotype vs phenotype</h2>
            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th>Term</th>
                    <th>Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Genotype</td>
                    <td>The plant&apos;s genetic makeup</td>
                  </tr>
                  <tr>
                    <td>Phenotype</td>
                    <td>The traits you can observe</td>
                  </tr>
                  <tr>
                    <td>Environment</td>
                    <td>Light, nutrients, temperature and care that shape traits</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Genotype + environment = phenotype. That&apos;s the core idea.</p>

            <h2>Clones and why they matter</h2>
            <p>
              To keep a chosen phenotype, growers often take cuttings, called clones, from a mother plant. A clone shares the mother&apos;s genetics. That&apos;s how a named variety can stay consistent from one grow to the next. Seeds, by contrast, can produce variation.
            </p>

            <h2>Other naming words you&apos;ll see</h2>
            <p>
              <strong>Cross</strong>: a plant bred from two different parents.
            </p>
            <p>
              <strong>Backcross</strong>: breeding a plant back to one of its parents to keep certain traits.
            </p>
            <p>
              <strong>Landrace</strong>: a traditional variety associated with a particular region.
            </p>
            <p>
              <strong>Cut</strong>: slang for a specific clone line.
            </p>
            <p>
              <strong>Pheno</strong>: short for phenotype.
            </p>
            <p>These are naming and breeding terms. They don&apos;t measure anything on their own.</p>

            <h2>Why the same name can smell different</h2>
            <p>Two products sold under the same variety name can differ, because:</p>
            <ul>
              <li>They may come from different phenotypes or clone lines.</li>
              <li>They were grown in different conditions.</li>
              <li>They were dried, cured and stored differently.</li>
            </ul>
            <p>A name is a starting point, not a guarantee.</p>

            <h2>What the label adds</h2>
            <p>
              Variety names aren&apos;t the regulated part of a cannabis label. Required lines include the class, net weight, Total THC and Total CBD, lot number, packaging date, storage conditions and the health warning. If you want to compare two products, those lines are the common ground.
            </p>

            <h2>Naming myths</h2>
            <p>
              <strong>&quot;Strain and cultivar are different plants.&quot;</strong> They&apos;re two words for the same idea.
            </p>
            <p>
              <strong>&quot;A phenotype is a type of strain.&quot;</strong> It&apos;s the expression of a plant&apos;s traits, not a category.
            </p>
            <p>
              <strong>&quot;Same name means identical product.&quot;</strong> Not necessarily, as above.
            </p>
            <p>
              <strong>&quot;Landrace means better.&quot;</strong> It means traditional and regional, not ranked.
            </p>

            <h2>Naming vocabulary, quick table</h2>
            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th>Word</th>
                    <th>Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Strain</td>
                    <td>Everyday word for a named variety</td>
                  </tr>
                  <tr>
                    <td>Cultivar</td>
                    <td>Horticultural term for a cultivated variety</td>
                  </tr>
                  <tr>
                    <td>Genotype</td>
                    <td>Genetic makeup</td>
                  </tr>
                  <tr>
                    <td>Phenotype</td>
                    <td>Observable traits</td>
                  </tr>
                  <tr>
                    <td>Clone / cut</td>
                    <td>Cutting from a mother plant</td>
                  </tr>
                  <tr>
                    <td>Cross</td>
                    <td>Plant bred from two parents</td>
                  </tr>
                  <tr>
                    <td>Backcross</td>
                    <td>Bred back to a parent</td>
                  </tr>
                  <tr>
                    <td>Landrace</td>
                    <td>Traditional regional variety</td>
                  </tr>
                  <tr>
                    <td>Pheno hunt</td>
                    <td>Growing many plants to choose one</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>How a named variety gets made</h2>
            <p>In general terms, it goes like this:</p>
            <ol>
              <li>Breeders cross two parent plants.</li>
              <li>They grow out many seeds from that cross.</li>
              <li>They observe the resulting plants and pick one or a few phenotypes.</li>
              <li>They keep those as clones so the traits stay consistent.</li>
              <li>The chosen plant gets a name.</li>
            </ol>
            <p>
              That&apos;s why naming and genetics are linked, and why a name alone doesn&apos;t guarantee identical results across producers.
            </p>

            <h2>Why the vocabulary matters for shoppers</h2>
            <p>
              Knowing these words helps you understand menu cards and staff conversations. It doesn&apos;t replace reading the label. Use the name as a starting point and the label as the facts.
            </p>

            <h2>Learn more</h2>
            <p>
              Read more vocabulary explainers in the <Link href="/guides">Pleasant Cannabis guides</Link>. Store details are on our <Link href="/weed-dispensary-mount-pleasant">Mount Pleasant weed dispensary</Link> page and the <Link href="/visit">visit page</Link>.
            </p>
            <p>
              Strain vs cultivar vs phenotype: two names for a variety, and one word for the traits a plant actually shows. Pleasant Cannabis is for adults 19 and over. Staff ask for ID from anyone who looks under 25.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
