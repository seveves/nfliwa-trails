import formatDuration from 'date-fns/formatDuration';

import styles from '../styles/TrailState.module.css';

const OPENING_HOURS = [
  [9, [16, 30]], // January
  [9, [16, 30]], // February
  [9, [17, 0]],    // March
  [8, [18, 30]], // April
  [8, [19, 30]], // May
  [8, [21, 0]], // June
  [8, [21, 0]], // July
  [8, [20, 30]], // August
  [8, [19, 30]], // September
  [8, [19, 0]], // October
  [9, [16, 30]], // November
  [9, [16, 30]], // December
]
export default function TrailState({ state }) {
  const month = new Date().getMonth();
  const [start, [end, endMinutes]] = OPENING_HOURS[month];
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  if (hours < start) {
    const opensIn = formatDuration({ minutes: ((start - hours) * 60) - minutes });
    return <div className={styles.badge + ' ' + styles.closed}>{`Geschlossen! Öffnet in: ${opensIn}`}</div>
  }

  if (hours > end || (hours === end && minutes > endMinutes)) {
    return <div className={styles.badge + ' ' + styles.closed}>Heute bereits geschlosssen!</div>
  }

  switch (state) {
    case 0:
      return <div className={styles.badge + ' ' + styles.ok}>Ok</div>
    case 1:
      return <div className={styles.badge + ' ' + styles.bc}>Vorsicht!</div>
    case 2:
    default:
      return <div className={styles.badge + ' ' + styles.closed}>Gesperrt!</div>
  }
}
