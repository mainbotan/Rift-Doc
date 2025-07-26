import { useState } from 'react';
import styles from './styles.module.scss';
import { AuthorizationModuleExample01 } from './sources/authorization/01-authorization-module';
import { AuthorizationModuleResponseExample01 } from './sources/authorization/01-authorization-module-response';
import { AuthorizationModuleStructureExample01 } from './sources/authorization/01-authorization-module-structure';
import { RegistrationModuleExample01 } from './sources/registration/01-registration-module';
import { MermaidViewer } from '../../components/Mermaid';
import CodeBlock from '../../components/CodeBlock';
import { RegistrationModuleResponseExample01 } from './sources/registration/01-registration-module-response';
import { RegistrationModuleStructureExample01 } from './sources/registration/01-registration-module-structure';

export default function CodeExample() {
  // Состояние для активной вкладки
  const [activeTab, setActiveTab] = useState<'authorization' | 'registration'>('authorization');

  // Функции для получения актуальных данных
  const getActiveCode = () => {
    switch (activeTab) {
        case 'registration': return RegistrationModuleExample01;
        default: return AuthorizationModuleExample01;
    }
  };

  const getActiveResponse = () => {
    switch (activeTab) {
        case 'registration': return RegistrationModuleResponseExample01;
        default: return AuthorizationModuleResponseExample01;
    }
  };

  const getActiveStructure = () => {
    switch (activeTab) {
        case 'registration': return RegistrationModuleStructureExample01;
        default: return AuthorizationModuleStructureExample01;
    }
  };

  return (
    <div className={styles.block}>
      <div className={styles.codeBlockControl}>
        <div className={`${styles.button} ${activeTab === 'authorization' ? styles.activeButton : ''}`} onClick={() => setActiveTab('authorization')}>Auth</div>
        <div className={`${styles.button} ${activeTab === 'registration' ? styles.activeButton : ''}`} onClick={() => setActiveTab('registration')}>Registration</div>
      </div>
      
      <div className={styles.codeBlock}>
        <div className={styles.main}>
          <div className={styles.source}>
            <CodeBlock code={getActiveCode()} language='php' />
          </div>
          <div className={styles.response}>
            <CodeBlock code={getActiveResponse()} language='json' />
          </div>
        </div>
        <div className={styles.structure}>
          <MermaidViewer definition={getActiveStructure()} />
        </div>
      </div>
    </div>
  );
}