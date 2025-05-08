
// Category Tag

import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
    name: string,
    img?: string,
    color?: 'contrast' | 'primary' | 'default' | 'empty',
    size?: 'sm' | 'md' | 'bg' 
};

// Принимаем всё нужное
export const ModelCard = ({ 
    name = 'unknown',
    img = '',
    color = 'default',
    size = 'md'
 }: Props) => (
  <div className={clsx(
    styles.root,
    styles[color],
    styles[size]
    )}>
    <div className={styles.imgArea}><div className={styles.img} style={{ backgroundImage: `url('${ img }')` }}></div></div>
    <div className={styles.infoArea}><div className={styles.name}>{ name }</div></div>
  </div>
);