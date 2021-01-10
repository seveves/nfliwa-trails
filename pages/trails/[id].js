import Head from 'next/head';
import Link from 'next/link';
import { renderMetaTags } from 'react-datocms';
import { TRAIL_QUERY } from '../../queries/trail';
import { request } from '../../lib/datocms';

import styles from '../../styles/Home.module.css';
import Navigation from '../../components/Navigation';

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
    <div className="container">
      <Head>
        <title>NaturFreunde Lichtenwald - Trails</title>
        {renderMetaTags(data.site.favicon)}
      </Head>
      <main className="main">
        <Navigation />
        <Link href="/">
          <a>
            <h2>
              <img
                src="/arrow-right-short.svg"
                alt="Back"
                className="rotate-180"
              />{' '}
              {data.trail.name}{' '}
            </h2>
          </a>
        </Link>
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
          <dd>
            <p>{data.trail.description}</p>
          </dd>
          <dt>GPX-Track</dt>
          <dd>{data.trail.track || '-'}</dd>
          <dt>Strava Segment</dt>
          <dd>{data.trail.segment || '-'}</dd>
        </dl>
      </main>
      <footer>
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
