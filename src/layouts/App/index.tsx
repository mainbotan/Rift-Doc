
// App main layout

import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

export const AppLayout = ({ children }: Props) => (
  <div className={styles.root}>
    {children}
  </div>
);