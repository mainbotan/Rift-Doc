
// Video Page

import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { VideoCard } from '../../ui-kit/VideoCard'; // <- video card from ui-
import { ModelCard } from '../../ui-kit/ModelCard'; // <- model card from ui-kit
import { Tag } from '../../ui-kit/Tag'; // <- tag from ui-kit
import { Button } from '../../ui-kit/Button'; // <- button from ui-kit
import { CategoryCard } from '../../ui-kit/CategoryCard'; // <- category card from ui-kit

type Props = {
  
};

// Data from scheme
import { Videos } from '../../scheme/videos/list';
import { Pornstars } from '../../scheme/pornstars/list';
import { Tags } from '../../scheme/tags/list';
import { Categories } from '../../scheme/categories/list';

// Utils
import { capitalizeWords } from '../../utils/string'; // <!- string's utils 

export const VideoPage = ({ }: Props) => (
  <div className={ styles.root }>
    <div className={ styles.info }>
      <div className={ styles.playerArea }>

      </div>
      <div className={ styles.videoInfoArea }>
        <div className={ styles.titleArea }>asddddddddddddddddddddd</div>
        <div className={ styles.actionArea }>
          <div className={ styles.item }></div>
        </div>
      </div>
      <div className={ styles.creatorArea }>
        <div className={ styles.avatarArea }>
          <div className={ styles.avatar }></div>
        </div>
        <div className={ styles.infoArea }>
          <div className={ styles.name }>фывввввввв</div>
          <div className={ styles.description }>
            фывфывфывфыв
          </div>
        </div>
        <div className={ styles.actionArea }>
          <div className={ styles.item }>
            <Button 
              text='Share'
              size='bg'
              color='default'
            />
          </div>
          <div className={ styles.item }>
            <Button 
              text='Subscribe'
              size='bg'
              color='contrast'
            />
          </div>
        </div>
      </div>
      <div className={ styles.tagsArea }>
        <div className={ styles.item }>
          <Tag
            text='gay'
            size='md'
            color='default'
          />
        </div>
      </div>
      <div className={ styles.featuredArea }>
        <div className={ styles.item }>
          <ModelCard
            name='ivan zolo 2004'
            img=''
            size='md'
            color='empty'
          />
        </div>
      </div>
    </div>
    <div className={ styles.recommendations }>
      {
        Videos.map(video => (
            <Link to={`/video/${video.view_key}`} >
              <div className={ styles.item }>
                  <VideoCard 
                    view_key={ video.view_key } 
                    title={ video.title } 
                    creator_name={ video.creator.full_name } 
                    img={ video.img } 
                    size='sm' 
                    color='default' 
                  />
              </div>
            </Link>
        ))
      }
    </div>
  </div>
);