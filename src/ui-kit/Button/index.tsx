
// Button

import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
    text: string,
    size?: 'sm' | 'md' | 'bg' 
};

export const Button = ({ 
    text = 'unknown',
    size = 'md'
 }: Props) => (
    
  <div className={clsx(
    styles.root,
    styles[size]
    )}>
    { text }
  </div>
);