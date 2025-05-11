import clsx from 'clsx';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

type Props = {
    view_key: string,
    title: string,
    img?: string,
    preview?: string,
    creator_name?: string,
    creator_id?: string,
    color?: 'contrast' | 'primary' | 'default' | 'empty',
    size?: 'sm' | 'md' | 'bg' 
};

export const VideoCard = ({ 
    view_key = 'unknown',
    title = 'unknown',
    img = '',
    preview, creator_id, creator_name,
    color = 'default',
    size = 'md'
 }: Props) => {
    return (
        <div className={clsx(styles.root, styles[color], styles[size])}>
            <div
                className={styles.img}
                style={{ backgroundImage: `url('${ img }')` }}
            ></div>
            <div className={styles.info}>
                <div className={styles.ad}>
                    <div className={styles.bar}><div className={styles.text} title={ creator_name }>{ creator_name }</div></div>
                    <div className={styles.box}><div className={styles.text}></div></div>
                </div>
                <div className={styles.title} title={ title }>{ title }</div>
            </div>
        </div>
    );
};