import { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import CodeBlock from '../CodeBlock';
import Coding from './../../assets/images/coding.png';

export const ModalMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const isModalHidden = localStorage.getItem('hideRiftModal') === 'true';
    setIsVisible(!isModalHidden);
  }, []);

  const handleClose = () => {
    // Запускаем анимацию закрытия
    setIsClosing(true);
    
    // Через время, равное длительности анимации, скрываем и сохраняем флаг
    setTimeout(() => {
      localStorage.setItem('hideRiftModal', 'true');
      setIsVisible(false);
      setIsClosing(false);
    }, 400); // Должно совпадать с duration анимации в CSS
  };

  if (!isVisible) return null;

  return (
    <div className={clsx(styles.root, { [styles.closing]: isClosing })}>
      <div className={styles.content}>
        <div className={styles.block}>
          <div className={styles.icoWrap}><img src={Coding} alt="Coding icon" /></div>
          <div className={styles.title}>Importing a package</div>
          <div className={styles.text}>Import Rift and all required dependencies into your project with a single command.</div>
          <CodeBlock code='composer require mainbotan/rift' language='bash' />
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.action}>
          <div 
            className={clsx(styles.button, styles.active)}
            onClick={handleClose}
          >
            Yes, sir
          </div>
        </div>
      </div>
    </div>
  );
};