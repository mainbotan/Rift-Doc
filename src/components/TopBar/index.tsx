
// TopBar - reccomendation tags

import styles from './styles.module.scss';
import { CategoryTag } from '../../ui-kit/CategoryTag'; // <- category tag

// tests
const tags = [
  {
    id: '101010',
    name: 'Reislin',
    img: 'https://ei.phprcdn.com/(m=bLWsSeKlbyaT)(mh=73CWwWpDBweKiJRB)48589292-9ca8-47e8-8105-eafcc751decd.jpg'
  }
];

export const TopBar = () => (
  <div className={styles.root}>
    <div className={styles.active}>
        {
          tags.map(tag => (
            <CategoryTag 
              text={tag.name}
              img={tag.img} 
              color='default' 
              size='bg' />   
          ))
        }
    </div>
  </div>
);