
// Docs layout

import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import styles from './styles.module.scss'; // <- layout styles
import { AppHeader } from '../../components/Header'; // <- header
import { AppFooter } from '../../components/Footer'; // <- footer
import { SideBar } from './SideBar';

export const DocsLayout = () => {
  // const { version } = useParams();
  return (
    <>
      <AppHeader />
      <div className={styles.root}>
        <div className={styles.versionMark}>
          <div className={styles.activeArea}>
            <div className={styles.versionSection}>
              <div className={styles.versionBox}>v1</div>
            </div>
            <div className={styles.versionDescription}>
              Current version
            </div>
          </div>
        </div>
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