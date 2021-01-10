import Head from 'next/head';
import { Image, renderMetaTags } from 'react-datocms';
import { MEMBERS_QUERY } from '../../queries/members';
import { request } from '../../lib/datocms';

import styles from '../../styles/Member.module.css';
import Navigation from '../../components/Navigation';

export async function getStaticProps() {
  const data = await request({
    query: MEMBERS_QUERY,
  });

  return {
    props: {
      data,
    },
  };
}

export default function Team({ data }) {
  return (
    <div className="container">
      <Head>
        <title>NaturFreunde Lichtenwald - Team</title>
        <link rel="icon" href="/favicon.ico" />
        {renderMetaTags(data.site.favicon)}
      </Head>
      <main className="main">
        <Navigation />
        <div className="grid">
          {data.allMembers.map((member) => (
            <div class="col">
              <div className={'card ' + styles.member}>
                <div className={styles.cardheader}>
                  <div className={styles.cardimg}>
                    <Image data={member.image.responsiveImage} />
                  </div>
                  <h3>{member.name}</h3>
                </div>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
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
