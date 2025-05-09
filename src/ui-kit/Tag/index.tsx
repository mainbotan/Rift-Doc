
// Category Tag

import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
    text: string,
    color?: 'contrast' | 'primary' | 'default' | 'empty',
    size?: 'sm' | 'md' | 'bg' 
};

// Принимаем всё нужное
export const Tag = ({ 
    text = 'unknown',
    color = 'default',
    size = 'md'
 }: Props) => (
    
  <div className={clsx(
    styles.root,
    styles[color],
    styles[size]
    )}>
    {text}
  </div>
);