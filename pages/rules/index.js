import Head from 'next/head';
import Navigation from '../../components/Navigation';

import styles from '../../styles/Rules.module.css';

export default function Rules() {
  return (
    <div className="container">
      <Head>
        <title>NaturFreunde Lichtenwald - Wegeregeln</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Navigation />
        <article className={styles.rule}>
          <h3>
            <img src="/rule1.png" alt="Fahre nur auf Wegen!" />
            <span>Fahre nur auf Wegen!</span>
          </h3>
          <p>
            Fahre nie querfeldein, du schädigst sonst die Natur! Respektiere
            Wegesperrungen und Naherholungs-gebiete. Die Art und Weise in der du
            fährst bestimmt das Handeln der Behörden und Verwaltungen.
          </p>
        </article>
        <article className={styles.rule}>
          <h3>
            <img src="/rule2.png" alt="Hinterlasse keine Spuren!" />
            <span>Hinterlasse keine Spuren!</span>
          </h3>
          <p>
            Bremse nur im Notfall mit blockierenden Rädern, um Bodenerosion und
            Wegeschäden zu verhindern. Passe deine Fahrweise dem Untergrund und
            der Wegbeschaffenheit an.
          </p>
        </article>
        <article className={styles.rule}>
          <h3>
            <img src="/rule3.png" alt="Halte dein MTB unter Kontrolle!" />
            <span>Halte dein MTB unter Kontrolle!</span>
          </h3>
          <p>
            Unachtsamkeit kann einen Unfall verursachen. Passe deine
            Geschwindigkeit der Situation an. Du musst in Sichtweite anhalten
            können.
          </p>
        </article>
        <article className={styles.rule}>
          <h3>
            <img src="/rule4.png" alt="Respektiere Naturnutzer und Tiere!" />
            <span>Respektiere Naturnutzer und Tiere!</span>
          </h3>
          <p>
            Erschrecke keine anderen Wegenutzer. Vermindere deine
            Geschwindigkeit beim Passieren und fahre nur in kleinen Gruppen.
            Verlasse rechtzeitig zur Dämmerung den Wald, um die Tiere nicht zu
            stören.
          </p>
        </article>
        <article className={styles.rule}>
          <h3>
            <img src="/rule5.png" alt="Plane im Voraus!" />
            <span>Plane im Voraus!</span>
          </h3>
          <p>
            Prüfe deine Ausrüstung, schätze deine Fähigkeiten richtig ein und
            wähle die Route entsprechend aus. Denke auch an Werkzeug, Proviant
            und Erste-Hilfe- Set. Trage Sicherheitsausrüstung - ein Helm ist
            Pflicht!
          </p>
        </article>
        <article className={styles.rule}>
          <h3>
            <img src="/rule6.png" alt="Achte auf die Fahrtrichtung!" />
            <span>Achte auf die Fahrtrichtung!</span>
          </h3>
          <p>
            Fahre den Trail immer in der richtigen Richtung, um Zusammenstöße zu
            verhindern. Start und Ende des Trails sind mit Schildern markiert.
          </p>
        </article>
      </main>
      <footer>
        <div className="impressum">
          <a
            href="https://www.naturfreunde-lichtenwald.de/impressum"
            alt="Impressum"
            target="_blank"
          >
            Impressum
          </a>
        </div>
      </footer>
    </div>
  );
}
