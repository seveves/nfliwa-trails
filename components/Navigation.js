import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div>
          <h1>Trails</h1>
          <h2>NaturFreunde Deutschlands</h2>
          <h3>Ortsgruppe Plochingen - Reichenbach - Lichtenwald e.V.</h3>
        </div>
        <img src="/naturfreunde_logo.gif" alt="NaturFreunde Logo" />
      </div>
      <div className={router.pathname === '/events' ? styles.activeEventLink : styles.eventLink}>
        <Link href="/events" alt="events">!! MTB Saisonauftakt 22.04.23 !!</Link>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li
            className={
              router.pathname === '/' || router.pathname.startsWith('/trails')
                ? styles.active
                : null
            }
          >
            <Link href="/" alt="trails">Trails</Link>
          </li>
          <li className={router.pathname === '/rules' ? styles.active : null}>
            <Link href="/rules" alt="rules">Wegeregeln</Link>
          </li>
          <li className={router.pathname === '/project' ? styles.active : null}>
            <Link href="/project" alt="project">Projekt</Link>
          </li>
          <li className={router.pathname === '/team' ? styles.active : null}>
            <Link href="/team" alt="team">Team</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
