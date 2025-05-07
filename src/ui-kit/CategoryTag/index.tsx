
// Category Tag

import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
    text: string,
    img?: string,
    color?: 'contrast' | 'primary' | 'default' | 'empty',
    size?: 'sm' | 'md' | 'bg' 
};

// Принимаем всё нужное
export const CategoryTag = ({ 
    text = 'unknown',
    img = '',
    color = 'default',
    size = 'md'
 }: Props) => (
    
  <div className={clsx(
    styles.root,
    styles[color],
    styles[size]
    )}>
    <div className={styles.imgArea} style={{ backgroundImage: `url(${img})` }}></div>
    <div className={styles.textArea}><div className={styles.text}>{ text }</div></div>
  </div>
);