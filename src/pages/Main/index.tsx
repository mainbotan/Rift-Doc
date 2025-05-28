import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

// styles ui-kit
import styles from './styles.module.scss';
import { Button } from '../../ui-kit/Button';
import CodeBlock from '../../components/CodeBlock';

// content
import RouterIco from '../../assets/images/split.png';
import MiddlewaresIco from '../../assets/images/milestone.png';
import UseCaseIco from '../../assets/images/heart.png';
import RepositoryIco from '../../assets/images/database.png';
import { ExampleValidator } from '../../scheme/validator/example-validator';
import { ContractShortDescription } from '../../scheme/contract/short-description.tsx';
import { ValidatorShortDescription } from '../../scheme/validator/short-description.tsx';
import { ExampleRepoRequest } from '../../scheme/contract/examples/repo-request-example.tsx';
import { ExampleRepoAnswer } from '../../scheme/contract/examples/repo-request-answer-example.tsx';


export const MainPage = () => {
  const labelRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = labelRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d')!;
    let width = container.offsetWidth;
    let height = container.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(255,255,255,0.04)';
      ctx.lineWidth = 1;
      const spacing = 40;

      for (let x = 0; x < width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    let offset = 0;
    const animate = () => {
      offset += 0.3;
      ctx.setTransform(1, 0, 0, 1, -offset, -offset);
      drawGrid();
    };

    animate();

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (glowRef.current) {
        glowRef.current.style.left = `${x}px`;
        glowRef.current.style.top = `${y}px`;
      }
    };

    container.addEventListener('mousemove', handleMove);
    return () => container.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className={styles.root}>
      <div ref={labelRef} className={styles.topLabel}>
        <canvas ref={canvasRef} className={styles.canvas} />
        <div ref={glowRef} className={styles.glow} />
        <div className={styles.active}>
          <div className={styles.block}>
            <div className={styles.title}>Rift</div>
            <div className={styles.underTitle}>
              <div className={styles.description}>Multitenant PHP framework</div>
              <div className={styles.actions}>
                <div className={styles.action}>
                  <Button color='primary' size='md' text='Examples' />
                </div>
                <div className={styles.action}>
                  <Link to='/docs/v1/introduction'><Button color='contrast' size='md' text='Documentation' /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.slide, styles.slide_1)}>
        <div className={styles.title}>High-complexity B2B applications with maximum data isolation.</div>
        <div className={styles.text}>
          Allow yourself to focus on the business logic of a particular tenant. Use Rift to isolate tenant schemes, create configuration repositories, lightning-fast initialization of new tenants, assign tariff plans, SLA support, and complete system diagnostics.
        </div>
      </div>
      <div className={clsx(styles.area, styles.area_1)}>
        <div className={styles.active}>
          <div  className={styles.block}>
            <div className={styles.title}>Rift Apps Architecture</div>
            <div className={styles.architecture_grid}>
              <div className={styles.section}>
                <div className={styles.ico}><img src={RouterIco} alt={RouterIco} /></div>
                <div className={styles.title}>Router Layer</div>
                <div className={styles.text}>Routing endpoints based on RESTFul principles based on array-configuration routes.</div>
              </div>
              <div className={styles.section}>
                <div className={styles.ico}><img src={MiddlewaresIco} alt={MiddlewaresIco} /></div>
                <div className={styles.title}>Middlewares</div>
                <div className={styles.text}>Rift allows you to use "early" validation of incoming data directly in middleware. Rift Validator will make your life easier, the simplest syntax and integration with the model will give you aesthetic pleasure.</div>
              </div>
              <div className={styles.section}>
                <div className={styles.ico}><img src={UseCaseIco} alt={UseCaseIco} /></div>
                <div className={clsx(styles.title, styles.contrast)}>UseCase</div>
                <div className={styles.text}>
                  A key part of the work of your future application. The basic business logic is contained here. Use the repositories from the DI container and execute the query chain.<br></br><br></br> 
                  In addition, Rift offers a mechanism for reusing "small" use cases in "composite" ones.</div>
              </div>
              <div className={styles.section}>
                <div className={styles.ico}><img src={RepositoryIco} alt={RepositoryIco} /></div>
                <div className={styles.title}>Repositories Layer</div>
                <div className={styles.text}>
                  Repositories describe possible actions of the entity and are configured via the "Rift Repositories Router".
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.slide, styles.slide_2)}>
        <div className={styles.wrapper}>
          <div className={styles.title}>Rift Response Contract</div>
          <div className={styles.text}>{ContractShortDescription}</div>
        </div>
        <div className={styles.examples_grid}>
          <div className={styles.example}><CodeBlock code={ExampleRepoRequest} language='php' /></div>
          <div className={styles.example}><CodeBlock code={ExampleRepoAnswer} language='json' /></div>
        </div>
      </div>
      <div className={clsx(styles.slide, styles.slide_3)}>
        <div className={styles.adaptive_column_grid}>
          <div className={styles.main_area}>
            <div className={styles.wrapper}>
              <div className={styles.title}>Rift Validator</div>
              <div className={styles.text}>{ValidatorShortDescription}</div>
            </div>
          </div>
          <div className={styles.addition_area}>
            <div className={styles.wrapper}>
              <CodeBlock
                code={ExampleValidator}
                language='php'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
