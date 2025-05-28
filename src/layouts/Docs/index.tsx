
// Docs layout

import { Link, Outlet } from 'react-router-dom';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';

import styles from './styles.module.scss'; // <- layout styles
import { AppHeader } from '../../components/Header'; // <- header
import { AppFooter } from '../../components/Footer'; // <- footer
import { SideBar } from './SideBar';


export const DocsLayout = () => {
  const { version } = useParams();
  return (
    <>
      <AppHeader />
      <div className={styles.root}>
        <div className={styles.active}>
          <SideBar />
          <div className={clsx(styles.mainArea, 'docs-markup')}>
            <Outlet />
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}