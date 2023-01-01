import Button from '../Button/Button';
import styles from './Timer.module.scss'

const Timer = () => {
  return (
    <div className={styles.buttons}>
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Clear</Button>
    </div>
  );
};

export default Timer;
