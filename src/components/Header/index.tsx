
// Header

import clsx from 'clsx';
import styles from './styles.module.scss';
import { Button } from '../../ui-kit/Button'; // <- button from ui-kit
import { SearchInput } from '../../ui-kit/SearchInput'; // <- search input from ui-kit

export const AppHeader = () => (
  <div className={styles.root}>
    <div className={styles.active}>
        <div className={clsx(styles.section, styles.logo)}>
            ...
        </div>
        <div className={clsx(styles.section, styles.notNecessary)}>
            <div className={styles.title}>...</div>
        </div>
        <div className={clsx(styles.section, styles.notNecessary)}>
            <div className={styles.title}>...</div>
        </div>
        <div className={styles.bar}>
            <SearchInput color='empty' size='bg' />
        </div>
        <div className={styles.section} style={{ justifyContent: 'end', paddingRight: '10px'}}>
            <Button text='Sign in' size='bg' color='default'/>
        </div>
    </div>
  </div>
);