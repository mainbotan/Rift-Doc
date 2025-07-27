import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';

export const NavBar = () => {
  const { version = 'v1' } = useParams();

  return (
    <div className={styles.navBar}>
        <div className={styles.capture}>On this page</div>
    </div>
  );
};