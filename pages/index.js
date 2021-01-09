import Head from 'next/head';
import Link from 'next/link';
import { renderMetaTags } from 'react-datocms';
import { TRAILS_QUERY } from '../queries/trails';
import { request } from '../lib/datocms'

import styles from '../styles/Home.module.css';
import TrailState from '../components/TrailState';

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
    <div className={styles.container}>
      <Head>
        <title>NaturFreunde Lichtenwald - Trails</title>
        <link rel="icon" href="/favicon.ico" />
        {renderMetaTags(data.trail.seo.concat(data.site.favicon))}
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          NaturFreunde OG Plochingen - Reichenbach - Lichtenwald
        </p>
        <h1 className={styles.title}>Trails</h1>

        <div className={styles.grid}>
          {data.allTrails.map((trail) => (
            <Link href={`/trails/${trail.id}`} key={trail.id}>
              <a className={styles.card}>
                <h3>{trail.name} <img src="/arrow-right-short.svg" alt="Open Trail Details" /></h3>
                <p>{trail.summary}</p>
                <TrailState state={trail.state} />
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <h4>Trail States</h4>
        <div className={styles.state}>
          <div className={styles.badge + ' ' + styles.ok}></div>
          <p>Go ride and have fun, Everything's fine!</p>
        </div>
        <div className={styles.state}>
          <div className={styles.badge + ' ' + styles.bc}></div>
          <p>Ride careful. There is something wrong with the trail (for example branch on trail)</p>
        </div>
        <div className={styles.state}>
          <div className={styles.badge + ' ' + styles.closed}></div>
          <p>We are sorry but this trail is currently closed.</p>
        </div>
      </footer>
    </div>
  );
}
