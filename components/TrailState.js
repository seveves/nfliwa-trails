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

  let _state = null;
  switch (state) {
    case 0:
      _state = { text: `Ok`, class: 'ok' };
      break;
    case 1:
      _state = { text: 'Vorsicht!', class: 'bc' };
      break;
    default:
    case 2:
      _state = { text: 'Gesperrt!', class: 'closed' };
      break;
  }

  return <div className={styles.badge + ' ' + styles[_state.class]}>{_state.text}</div>;
}
