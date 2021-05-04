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
      <nav className={styles.navbar}>
        <ul>
          <li
            className={
              router.pathname === '/' || router.pathname.startsWith('/trails')
                ? styles.active
                : null
            }
          >
            <Link href="/">
              <a alt="trails">Trails</a>
            </Link>
          </li>
          <li className={router.pathname === '/rules' ? styles.active : null}>
            <Link href="/rules">
              <a alt="rules">Wegeregeln</a>
            </Link>
          </li>
          <li className={router.pathname === '/project' ? styles.active : null}>
            <Link href="/project">
              <a alt="project">Projekt</a>
            </Link>
          </li>
          <li className={router.pathname === '/team' ? styles.active : null}>
            <Link href="/team">
              <a alt="team">Team</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
