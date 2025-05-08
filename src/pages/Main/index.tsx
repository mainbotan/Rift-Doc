
// Category Tag

import clsx from 'clsx';
import styles from './styles.module.scss';
import { VideoCard } from '../../ui-kit/VideoCard'; // <!- video card from ui-kit

type Props = {
  // здесь как-то принимаем оффест и лимит -> делаем запрос на получение рекомендаций
};

// Data from scheme
import { Videos } from '../../scheme/videos/list';

export const MainPage = ({ }: Props) => (
    
  <div className={ styles.root }>
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