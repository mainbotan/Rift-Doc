
// TopBar - reccomendation tags

import styles from './styles.module.scss';
import { Button } from '../../ui-kit/Button';

export const TopBar = () => (
  <div className={styles.root}>
    <div className={styles.active}>
        <Button text='ебать' size='md' />
    </div>
  </div>
);