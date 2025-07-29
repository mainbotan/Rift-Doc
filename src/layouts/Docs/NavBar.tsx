// NavBar.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import clsx from 'clsx';

type Heading = {
  id: string;
  text: string;
  level: number;
};

type NavBarProps = {
  mainAreaRef: React.RefObject<HTMLDivElement>;
};

export const NavBar = ({ mainAreaRef }: NavBarProps) => {
  const { version = 'v1' } = useParams();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const mainContent = mainAreaRef.current;
    if (!mainContent) return;

    const updateHeadings = () => {
      const headingElements = Array.from(mainContent.querySelectorAll('h2, h3, h4'))
        .filter((el): el is HTMLElement => el instanceof HTMLElement)
        .filter(el => el.textContent?.trim());

      const parsedHeadings = headingElements.map((heading) => {
        const text = heading.textContent?.trim() || '';
        const id = heading.id || generateId(text);
        if (!heading.id) heading.id = id;
        
        return { id, text, level: parseInt(heading.tagName.substring(1), 10) };
      });

      setHeadings(parsedHeadings);
    };

    updateHeadings();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { 
        root: mainAreaRef.current,
        rootMargin: '-70px 0px -65% 0px',
        threshold: 0.1
      }
    );

    const mutationObserver = new MutationObserver(updateHeadings);
    mutationObserver.observe(mainContent, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [version, mainAreaRef]);

  const generateId = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+$/, '');
  };

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    const mainContent = mainAreaRef.current;
    
    if (element && mainContent) {
      const elementRect = element.getBoundingClientRect();
      const mainRect = mainContent.getBoundingClientRect();
      const scrollPosition = elementRect.top - mainRect.top + mainContent.scrollTop - 70;
      
      mainContent.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.navBar}>
      <div className={clsx(styles.capture, styles.versionMark)}>version {version}</div>
      
      {headings.length > 0 && (
        <>
          <div className={styles.capture}>On this page</div>
          <div className={styles.headingsList}>
            {headings.map((heading) => (
              <div
                key={heading.id}
                className={clsx(
                  styles.capture,
                  `heading-level-${heading.level}`,
                  { [styles.active]: activeId === heading.id }
                )}
                onClick={() => scrollToHeading(heading.id)}
              >
                {heading.text}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};