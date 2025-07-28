
// Docs layout
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import styles from './styles.module.scss'; // <- layout styles
import { AppHeader } from '../../components/Header'; // <- header
import { AppFooter } from '../../components/Footer'; // <- footer
import { SideBar } from './SideBar';
import { NavBar } from './NavBar';
import Split from './../../assets/images/side-bars.png';

export const DocsLayout = () => {
  // const { version } = useParams();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  return (
    <>
    <div className={styles.winWrap}>
      <AppHeader />
      <div className={styles.root}>
        <div className={styles.active}>
          <SideBar collapsed={isSidebarCollapsed} />
          
          <div className={styles.hideSideBarArea} onClick={toggleSidebar}>
            <div className={styles.button}>
              <img 
                src={Split} 
                style={{ transform: isSidebarCollapsed ? 'rotate(180deg)' : 'none' }}
                alt="Toggle sidebar"
              />
            </div>
          </div>

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