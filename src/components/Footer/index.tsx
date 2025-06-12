
// Footer

import styles from './styles.module.scss';
import clsx from 'clsx';
import thunder from  '../../assets/images/thunder.png';

export const AppFooter = () => (
  <div className={styles.root}>
    <div className={styles.active}>
      <div className={clsx(styles.section, styles.logo_section)}>
        <div className={styles.logo}>
          <div className={styles.text}>
            Rift
            <img src={thunder} alt={thunder} />
          </div>
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={clsx(styles.section, styles.description_section)}>
        <div className={styles.title}>Core Components</div>
        <div className={styles.point}>Operation Contract</div>
        <div className={styles.point}>Router</div>
        <div className={styles.point}>Validator</div>
        <div className={styles.point}>UseCases</div>
        <div className={styles.point}>Models</div>
        <div className={styles.point}>Database Configurators</div>
        <div className={styles.point}>Repositories</div>
        <div className={styles.point}>API Gateway</div>
        <div className={styles.point}>DI Containers</div>
        <div className={styles.point}>DTO Objects & Factories</div>
        <div className={styles.point}>Security & Crypto</div>
      </div>
      <div className={clsx(styles.section, styles.description_section)}>
        <div className={styles.title}>Additional Modules</div>
        <div className={styles.point}>Metrics</div>
        <div className={styles.point}>SLA Support</div>
        <div className={styles.point}>Plans & Tenant's Configurations</div>
        <div className={styles.point}>Mailer</div>
        <div className={styles.point}>External Requests</div>
        <div className={styles.point}>Redis Caching</div>
        <div className={styles.point}>Optional SSR for routes</div>
      </div>
    </div>
    <div className={styles.addition}>
      <div className={styles.active_area}>
          Fuck da enterprise
      </div>
    </div>
  </div>
);