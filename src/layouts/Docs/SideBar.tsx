import { useParams, Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { docsNav } from './navigation';

export const SideBar = () => {
  const { version = 'v1' } = useParams();

  type NavItem = {
    path: string;
    title: string;
    sign?: string;
    children?: NavItem[];
  };

  const renderItem = (item: NavItem, parentPath = '') => {
    const fullPath = parentPath ? `${parentPath}/${item.path}` : item.path;

    return (
      <div key={fullPath}>
        <Link to={`/docs/${version}/${fullPath}`} className={styles.link}>
          <div className={styles.title}>
            <div className={styles.tag}>{item.sign ?? '/'}</div>
            {item.title}
          </div>
        </Link>

        {item.children && (
          <div className={styles.childrens}>
            {item.children.map(child => renderItem(child, fullPath))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.sidePanel}>
      {docsNav.map(section => (
        <div className={styles.section} key={section.path}>
          {renderItem(section)}
        </div>
      ))}
    </div>
  );
};