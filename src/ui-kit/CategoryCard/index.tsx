import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
    title: string,
    img?: string,
    description?: string | number
    color?: 'contrast' | 'primary' | 'default' | 'empty',
    size?: 'sm' | 'md' | 'bg' 
};

export const CategoryCard = ({ 
    title = 'unknown',
    img = '',
    description = 'default',
    size = 'md',
    color = 'default'
 }: Props) => {
    return (
        <div className={clsx(styles.root, styles[color], styles[size])} style={{ backgroundImage: `url('${ img }')` }}>
            <div className={styles.info}>
                <div className={styles.text}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                </div>
            </div>
        </div>
    );
};
