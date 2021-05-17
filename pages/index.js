import Head from 'next/head';
import Link from 'next/link';
import { renderMetaTags } from 'react-datocms';
import { TRAILS_QUERY } from '../queries/trails';
import { request } from '../lib/datocms';

import styles from '../styles/Home.module.css';
import TrailState from '../components/TrailState';
import Navigation from '../components/Navigation';

export async function getStaticProps() {
  const data = await request({
    query: TRAILS_QUERY,
  });

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div className="container">
      <Head>
        <title>NaturFreunde Lichtenwald - Trails</title>
        <link rel="icon" href="/favicon.ico" />
        {renderMetaTags(data.site.favicon)}
      </Head>
      <main className="main">
        <Navigation />
        <div className="grid">
          {data.allTrails.map((trail) => (
            <div className="col" key={trail.id}>
              <Link href={`/trails/${trail.id}`} key={trail.id}>
                <a className="card">
                  <h3>
                    {trail.name}{' '}
                    <img
                      src="/arrow-right-short.svg"
                      alt="Open Trail Details"
                    />
                  </h3>
                  <p>{trail.summary}</p>
                  <TrailState state={trail.state} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">
        <h4>Trail-Öffnungszeiten</h4>
        <div className={styles.opening}>
          <p>Diese Öffnungszeiten sind mit Waldbesitzer und Forst abgestimmt.<br/>Bitte unterstützt uns und haltet euch an diese Zeiten!</p>
          <dl>
            <dt>Januar/Februar</dt>
            <dd>9:00 Uhr bis 16:30 Uhr</dd>
            <dt>März</dt>
            <dd>9:00 Uhr bis 17:00 Uhr</dd>
            <dt>April</dt>
            <dd>8:00 Uhr bis 18:30 Uhr</dd>
            <dt>Mai</dt>
            <dd>8:00 Uhr bis 19:30 Uhr</dd>
            <dt>Juni/Juli</dt>
            <dd>8:00 Uhr bis 21:00 Uhr</dd>
            <dt>August</dt>
            <dd>8:00 Uhr bis 20:30 Uhr</dd>
            <dt>September</dt>
            <dd>8:00 Uhr bis 19:30 Uhr</dd>
            <dt>Oktober</dt>
            <dd>8:00 Uhr bis 19:00 Uhr</dd>
            <dt>November/Dezember</dt>
            <dd>8:00 Uhr bis 16:30 Uhr</dd>
          </dl>
        </div>
        <h4>Trail-Status</h4>
        <div className={styles.state}>
          <div className={styles.badge + ' ' + styles.ok}></div>
          <p>Alles in Ordnung. Viel Spaß beim Biken!</p>
        </div>
        <div className={styles.state}>
          <div className={styles.badge + ' ' + styles.bc}></div>
          <p>Fahre vorsichtig! Es wurde ein Problem mit dem Trail gemeldet. Wir kümmern uns schnellstmöglich darum!</p>
        </div>
        <div className={styles.state}>
          <div className={styles.badge + ' ' + styles.closed}></div>
          <p>Dieser Trail ist aktuell geschlossen. Bitte unterstütze uns und befahre den Trail nicht!</p>
        </div>
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
