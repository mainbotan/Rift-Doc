import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { Button } from '../../ui-kit/Button'; // <- button from ui-kit

export const AppHeader = () => (
  <div className={styles.root}>
    <div className={styles.active}>
        <div className={styles.modalLine}></div>
        <div className={clsx(styles.section, styles.logoSection)}>
          <Link to='/'><div className={styles.wrapper}>
              Rift
          </div></Link>
        </div>
        <div className={styles.section}>
          <Link to='/'><div className={styles.wrapper}><div className={styles.title}>Last release</div></div></Link>
        </div>
        <div className={styles.barSection}></div>
        <div className={styles.section}>
          <div className={styles.wrapper}>
            <Link to='/docs/v1/introduction'><Button color='dark' size='md' text='Get started' /></Link>
          </div>
        </div>
    </div>
  </div>
); 