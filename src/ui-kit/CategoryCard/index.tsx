import clsx from 'clsx';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

type Props = {
    view_key: string,
    title: string,
    img?: string,
    description?: string
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
        <div className={clsx(styles.root, styles[color], styles[size])}>
            <div className={styles.img} style={{ backgroundImage: `url('${ img }')` }}>
                
            </div>
        </div>
    );
};
