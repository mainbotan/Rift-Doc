
// Docs layout

import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import styles from './styles.module.scss'; // <- layout styles
import { AppHeader } from '../../components/Header'; // <- header
import { AppFooter } from '../../components/Footer'; // <- footer
import { SideBar } from './SideBar';
import { NavBar } from './NavBar';

export const DocsLayout = () => {
  // const { version } = useParams();
  return (
    <>
    <div className={styles.winWrap}>
      <AppHeader />
      <div className={styles.root}>
        <div className={styles.active}>
          <SideBar />
          <div className={clsx(styles.mainArea, 'docs-markup')}>
            <Outlet />
          </div>
          <NavBar />
        </div>
      </div>
      <AppFooter />
    </div>
    </>
  );
}