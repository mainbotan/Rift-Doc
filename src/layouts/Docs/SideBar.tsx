import { Link, useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { docsNav } from './navigation';

export const SideBar = () => {
  const { version = 'v1' } = useParams(); // fallback на v1

  return (
    <div className={styles.sidePanel}>
      {docsNav.map((section, i) => (
        <div className={styles.section} key={i}>
          {section.path ? (
            <Link to={`/docs/${version}/${section.path}`}>
              <div className={styles.title}>
                <div className={styles.tag}>/</div>
                {section.title}
              </div>
            </Link>
          ) : (
            <div className={styles.title}>
              <div className={styles.tag}>/</div>
              {section.title}
            </div>
          )}

          {section.children && (
            <div className={styles.chapters}>
              {section.children.map((child, j) => (
                <Link to={`/docs/${version}/${child.path}`} key={j}>
                  <div className={styles.title}>{child.title}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
