import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
    color?: 'white' | 'default' | 'empty' | 'dark',
    size?: 'sm' | 'md' | 'bg'
};

export const Cross = ({ 
    color = 'default',
    size = 'md'
 }: Props) => {
    return (
        <div className={clsx(
            styles.root,
            styles[color],
            styles[size]
        )}>
            <div className={clsx(styles.box, styles.b1)}></div>
            <div className={clsx(styles.box, styles.b2)}></div>
            <div className={clsx(styles.box, styles.b3)}></div>
            <div className={clsx(styles.box, styles.b4)}></div>
        </div>
    );
};