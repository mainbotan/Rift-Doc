
// App main layout

import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss'; // <- layout styles
import { AppHeader } from '../../components/Header'; // <- header
import { AppFooter } from '../../components/Footer'; // <- footer


export const DocsLayout = () => (
  <>
    <AppHeader />
    <div className={styles.root}>
      <div className={styles.active}>
        <div className={styles.sidePanel}>

        </div>
        <div className={styles.mainArea}>
          <Outlet />
        </div>
      </div>
    </div>
    <AppFooter />
  </>
);