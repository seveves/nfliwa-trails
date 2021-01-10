import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <h1>Trails</h1>
      <h2>NaturFreunde e.V.</h2>
      <h3>Ortsgruppe Plochingen - Reichenbach - Lichtenwald</h3>
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
