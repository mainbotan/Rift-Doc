
// App main layout

import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss'; // <- layout styles
import { AppHeader } from '../../components/Header'; // <- header
import { AppFooter } from '../../components/Footer'; // <- footer


export const AppLayout = () => (
  <>
    <AppHeader />
    <div className={styles.root}>
      <div className={styles.active}>
        <Outlet />
      </div>
    </div>
    <AppFooter />
  </>
);