
// TopBar - reccomendation tags

import styles from './styles.module.scss';
import { CategoryTag } from '../../ui-kit/CategoryTag'; // <- category tag

// Data from scheme
import { Pornstars } from '../../scheme/pornstars/list';


export const TopBar = () => (
  <div className={styles.root}>
    <div className={styles.active}>
        {
          Pornstars.map(pornstar => (
            <div className={ styles.item }>
              <CategoryTag 
                text={pornstar.full_name}
                img={pornstar.avatar} 
                color='default' 
                size='md' 
              />    
            </div>
          ))
        }
    </div>
  </div>
);