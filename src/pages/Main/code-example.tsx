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
import { VerificationModuleExample01 } from './sources/verification/01-verification-module';
import { VerificationModuleResponseExample01 } from './sources/verification/01-verification-module-response';
import { VerificationModuleStructureExample01 } from './sources/verification/01-verification-module-structure';
import { CheckJwtExample01 } from './sources/check-jwt/01-check-jwt';
import { CheckJwtResponseExample01 } from './sources/check-jwt/01-check-jwt-response';
import { CheckJwtStructureExample01 } from './sources/check-jwt/01-check-jwt-structure';

export default function CodeExample() {
  // Состояние для активной вкладки
  const [activeTab, setActiveTab] = useState<'authorization' | 'registration' | 'verification' | 'check-jwt-middleware'>('authorization');

  // Функции для получения актуальных данных
  const getActiveCode = () => {
    switch (activeTab) {
        case 'check-jwt-middleware': return CheckJwtExample01;
        case 'verification': return VerificationModuleExample01;
        case 'registration': return RegistrationModuleExample01;
        default: return AuthorizationModuleExample01;
    }
  };

  const getActiveResponse = () => {
    switch (activeTab) {
        case 'check-jwt-middleware': return CheckJwtResponseExample01;
        case 'verification': return VerificationModuleResponseExample01;
        case 'registration': return RegistrationModuleResponseExample01;
        default: return AuthorizationModuleResponseExample01;
    }
  };

  const getActiveStructure = () => {
    switch (activeTab) {
        case 'check-jwt-middleware': return CheckJwtStructureExample01;
        case 'verification': return VerificationModuleStructureExample01;
        case 'registration': return RegistrationModuleStructureExample01;
        default: return AuthorizationModuleStructureExample01;
    }
  };

  return (
    <div className={styles.block}>
      <div className={styles.codeTitle}>
        <div className={styles.title}>So fucking <div className={styles.contrast}>clean...</div></div>
        <div className={styles.quote}>
          The immutability of the chain of operations.
        </div>
      </div>
      <div className={styles.codeBlockControl}>
        <div className={`${styles.button} ${activeTab === 'authorization' ? styles.activeButton : ''}`} onClick={() => setActiveTab('authorization')}>Auth</div>
        <div className={`${styles.button} ${activeTab === 'registration' ? styles.activeButton : ''}`} onClick={() => setActiveTab('registration')}>Registration</div>
        <div className={`${styles.button} ${activeTab === 'verification' ? styles.activeButton : ''}`} onClick={() => setActiveTab('verification')}>Verification</div>
        <div className={`${styles.button} ${activeTab === 'check-jwt-middleware' ? styles.activeButton : ''}`} onClick={() => setActiveTab('check-jwt-middleware')}>Bearer token middleware</div>
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