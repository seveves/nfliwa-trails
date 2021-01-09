import Head from 'next/head';
import Link from 'next/link';
import { renderMetaTags } from 'react-datocms';
import { TRAIL_QUERY } from '../../queries/trail';
import { request } from '../../lib/datocms';

import styles from '../../styles/Home.module.css';

export async function getServerSideProps(context) {
  const data = await request({
    query: TRAIL_QUERY,
    variables: { id: context.params.id },
  });

  return {
    props: {
      data,
    },
  };
}

export default function Trail({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NaturFreunde Lichtenwald - Trails</title>
        {renderMetaTags(data.trail.seo.concat(data.site.favicon))}
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          NaturFreunde OG Plochingen - Reichenbach - Lichtenwald
        </p>
        <Link href="/">
          <a alt="trails overview">
            <h1 className={styles.title}>Trails</h1>
          </a>
        </Link>
        <h2>{data.trail.name}</h2>
        <div className={styles.problem}>
          <p>
            Dir ist auf diesem Trail ein Problem aufgefallen? Dann melde es uns!
          </p>
          <a
            href={`sms://+4915752428299;?&body=[NFTrails] Problem auf ${data.trail.name}`}
          >
            <img src="/chat-right-text.svg" alt="send sms" /> SMS
          </a>
          <a
            href={`mailto:trails@naturfreunde-lichtenwald.de?&subject=[NFTrails] Problem auf ${data.trail.name}`}
          >
            <img src="/envelope.svg" alt="send mail" /> E-Mail
          </a>
        </div>
        <dl>
          <dt>Beschreibung</dt>
          <dd><p>{data.trail.description}</p></dd>
          <dt>GPX-Track</dt>
          <dd>{data.trail.track || '-'}</dd>
          <dt>Strava Segment</dt>
          <dd>{data.trail.segment || '-'}</dd>
        </dl>
      </main>
    </div>
  );
}
