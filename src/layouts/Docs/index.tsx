
// Docs layout

import { Link, Outlet } from 'react-router-dom';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';

import styles from './styles.module.scss'; // <- layout styles
import { AppHeader } from '../../components/Header'; // <- header
import { AppFooter } from '../../components/Footer'; // <- footer


export const DocsLayout = () => {
  const { version } = useParams();
  return (
    <>
      <AppHeader />
      <div className={styles.root}>
        <div className={styles.active}>
          <div className={styles.sidePanel}>
            <div className={styles.section}>
              <Link to='/docs/v1/introduction'><div className={styles.title}><div className={styles.tag}>/</div>Introduction</div></Link>
            </div>
            <div className={styles.section}>
              <div className={styles.title}>Routing</div>
              <div className={styles.chapters}>
                <div className={styles.title}>RESTful router</div>
                <div className={styles.title}>Middlewares</div>
                <div className={styles.title}>Headers</div>
              </div>
            </div>
          </div>
          <div className={clsx(styles.mainArea, 'docs-markup')}>
            <Outlet />
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}