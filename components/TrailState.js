import styles from '../styles/TrailState.module.css';

export default function TrailState({ state }) {
  let _state = null;
  switch (state) {
    case 0:
      _state = { text: 'Ok', class: 'ok' };
      break;
    case 1:
      _state = { text: 'Be Careful', class: 'bc' };
      break;
    default:
    case 2:
      _state = { text: 'Closed', class: 'closed' };
      break;
  }

  return <div className={styles.badge + ' ' + styles[_state.class]}>{_state.text}</div>;
}
