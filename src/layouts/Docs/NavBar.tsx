import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import clsx from 'clsx';

export const NavBar = () => {
  const { version = 'v1' } = useParams();

  return (
    <div className={styles.navBar}>
        <div className={clsx(styles.capture, styles.versionMark)}>version {version}</div>
        <div className={styles.capture}>On this page</div>
    </div>
  );
};