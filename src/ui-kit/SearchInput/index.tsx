
// Category Tag

import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
    placeholder?: string,
    color?: 'contrast' | 'primary' | 'default' | 'empty',
    size?: 'sm' | 'md' | 'bg' 
};

// Принимаем всё нужное
export const SearchInput = ({ 
    placeholder = 'Fing it to your liking...',
    color = 'default',
    size = 'md'
 }: Props) => (
    
  <input className={clsx(
    styles.root,
    styles[color],
    styles[size]
    )}
    placeholder={ placeholder }
    type='text'
    />
);