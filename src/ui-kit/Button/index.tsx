import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
    text: string,
    color?: 'contrast' | 'primary' | 'default' | 'empty',
    size?: 'sm' | 'md' | 'bg',
    ico?: string
};

export const Button = ({ 
    text = 'unknown',
    color = 'default',
    size = 'md',
    ico = ''
 }: Props) => {
    return (
        <button className={clsx(
            styles.root,
            styles[color],
            styles[size],
            {
              [styles.withIco]: !!ico
            }
        )}>
            {ico ? (
                <>
                    <div className={styles.ico}>
                        <img src={ico} />
                    </div>
                    <div className={styles.text}>{text}</div>
                </>
            ) : (
                text
            )}
        </button>
    );
};