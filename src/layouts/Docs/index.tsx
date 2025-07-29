// DocsLayout.tsx
import { useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { AppHeader } from '../../components/Header';
import { AppFooter } from '../../components/Footer';
import { SideBar } from './SideBar';
import { NavBar } from './NavBar';
import Split from './../../assets/images/side-bars.png';

export const DocsLayout = () => {
  const mainAreaRef = useRef<HTMLDivElement>(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
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

          <div 
            className={clsx(styles.mainArea, 'docs-markup')} 
            ref={mainAreaRef}
            id="main-content-area"
          >
            <Outlet context={{ mainAreaRef }} />
          </div>
          
          <NavBar mainAreaRef={mainAreaRef as React.RefObject<HTMLDivElement>} />
        </div>
      </div>
      <AppFooter />
    </div>
  );
};