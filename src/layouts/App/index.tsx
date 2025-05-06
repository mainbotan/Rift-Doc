
// App main layout

import { ReactNode } from 'react';
import styles from './styles.module.scss'; // <- layout styles
import { AppHeader } from '../../components/Header'; // <- header
import { TopBar } from '../../components/TopBar'; // <- top bar
import { AppFooter } from '../../components/Footer'; // <- footer

type Props = {
  children: ReactNode;
};

export const AppLayout = ({ children }: Props) => (
  <>
    <AppHeader />
    <TopBar />
    <div className={styles.root}>
      {children}
    </div>
    <AppFooter />
  </>
);