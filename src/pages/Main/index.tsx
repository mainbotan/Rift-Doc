
// Category Tag

import clsx from 'clsx';
import styles from './styles.module.scss';
import { VideoCard } from '../../ui-kit/VideoCard'; // <!- video card from ui-
import { ModelCard } from '../../ui-kit/ModelCard'; // <!- model card from ui-kit

type Props = {
  // здесь как-то принимаем оффест и лимит -> делаем запрос на получение рекомендаций
};

// Data from scheme
import { Videos } from '../../scheme/videos/list';
import { Pornstars } from '../../scheme/pornstars/list';

export const MainPage = ({ }: Props) => (
    
  <div className={ styles.root }>
    <div className={ styles.pornstarsGrid }>
      {
        Pornstars.map(pornstar => (
          <div className={ styles.item }>
            <ModelCard 
              name={pornstar.full_name}
              img={pornstar.avatar} 
              color='empty' 
              size='md' 
            />    
          </div>
        ))
      }
    </div>
    <div className={ styles.videosGrid }>
      {
        Videos.map(video => (
          <VideoCard 
            view_key={ video.view_key } 
            title={ video.title } 
            creator_name={ video.creator.full_name } 
            img={ video.img } 
            size='md' 
            color='default' 
          />
        ))
      }
    </div>
  </div>
);