
// TopBar - main sections

import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { ModelTag } from '../../ui-kit/ModelTag'; // <- model tag from ui-kit

// Data from scheme
import { Pornstars } from '../../scheme/pornstars/list';


export const TopBar = () => (
  <div className={styles.root}>
    <div className={styles.active}>
        <Link to='/'><div className={styles.item}><div className={styles.text}>Главная страница</div></div></Link>
        <div className={styles.item}><div className={styles.text}>Видео</div></div>
        <div className={styles.item}><div className={styles.text}>Категории</div></div>
        <div className={styles.item}><div className={styles.text}>LIVE CAMS</div></div>
        <div className={styles.item}><div className={styles.text}>Порнозвёзды</div></div>
        <div className={styles.item}><div className={styles.text}>Сообщество</div></div>
        <div className={styles.item}><div className={styles.text}>Фото и гифки</div></div>
    </div>
  </div>
);