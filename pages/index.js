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
            <div class="col">
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
        <h4>Trail States</h4>
        <div className={styles.state}>
          <div className={styles.badge + ' ' + styles.ok}></div>
          <p>Go ride and have fun, Everything's fine!</p>
        </div>
        <div className={styles.state}>
          <div className={styles.badge + ' ' + styles.bc}></div>
          <p>
            Ride careful. There is something wrong with the trail (for example
            branch on trail)
          </p>
        </div>
        <div className={styles.state}>
          <div className={styles.badge + ' ' + styles.closed}></div>
          <p>We are sorry but this trail is currently closed.</p>
        </div>
        <div className="impressum">
          <a
            href="http://nfliwa.herokuapp.com/client/static/impressum"
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
