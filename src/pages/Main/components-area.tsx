import clsx from 'clsx';
import styles from './styles.module.scss';
import CodeBlock from '../../components/CodeBlock';
import { RoutesConfig } from './sources/components/routes-config';
import { Model } from './sources/components/model';
import { RunTimeDeploy } from './sources/components/runtime-deploy';

export const ComponentsArea = () => {
    return (
        <>
        <div className={clsx(styles.area, styles.ComponentsArea)}>
            <div className={styles.active}>
                <div className={styles.canvas}>
                    <div className={styles.line}>
                        <div className={styles.description}>
                            <div className={styles.outer}>
                                <div className={styles.title}>Routes Config <br/>& RateLimmiter</div>
                                <div className={styles.text}>
                                    Middleware for rate limiting routes of the RoutesBox object with support for caching using different strategies.
                                </div>
                            </div>
                        </div>
                        <div className={styles.source}>
                            <CodeBlock code={RoutesConfig} language='php' />
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.source}>
                            <CodeBlock code={Model} language='php' />
                        </div>
                        <div className={styles.description}>
                            <div className={clsx(styles.outer, styles.right)}>
                                <div className={styles.title}>Models</div>
                                <div className={styles.text}>
                                    Defining an entity stored in a database using a fluent interface, versioning, field validation rules, and optional migration methods.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.description}>
                            <div className={styles.outer}>
                                <div className={styles.title}>Configurators</div>
                                <div className={styles.text}>
                                    Real-time configuration of new tenants' database schemas.
                                </div>
                            </div>
                        </div>
                        <div className={styles.source}>
                            <CodeBlock code={RunTimeDeploy} language='php' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>  
    );
}