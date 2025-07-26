import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

// styles ui-kit
import styles from './styles.module.scss';
import squares from './squares.module.scss';
import { Button } from '../../ui-kit/Button';
import CodeBlock from '../../components/CodeBlock';

// content
import RouterIco from '../../assets/images/split.png';
import MiddlewaresIco from '../../assets/images/milestone.png';
import UseCaseIco from '../../assets/images/heart.png';
import RepositoryIco from '../../assets/images/database.png';
import GithubIco from '../../assets/images/logos/github-mark-white.svg';

import { ExampleValidator } from '../../scheme/validator/example-validator';
import { ValidatorShortDescription } from '../../scheme/validator/short-description.tsx';
import CodeExample from './code-example.tsx';
import { Cross } from '../../components/Elements/Cross/index.tsx';


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
          <div className={styles.flex}>
            <div className={styles.brandSection}>
              <div className={styles.block}>
                <div className={styles.title}>Rift</div>
                <div className={styles.underTitle}>
                  <div className={styles.description}>Multitenant PHP miniframework</div>
                  <div className={styles.actions}>
                    <div className={styles.action}>
                      <Link to='https://github.com/mainbotan/Rift'><Button color='default' size='md' text='Sources' ico={GithubIco}/></Link>
                    </div>
                    <div className={styles.action}>
                      <Link onClick={() => window.scrollTo(0, 0)} to='/docs/v1/introduction'><Button color='contrast' size='md' text='Documentation' /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.previewSection}>
              <div className={styles.focus}>
                <div className={styles.tags}>
                  <div className={styles.tag}><div className={styles.s1}>PHP</div><div className={styles.s2}>Reference</div></div>
                  <div className={styles.tag}><div className={styles.s1}>API</div><div className={styles.s2}>Gateway</div></div>
                  <div className={styles.tag}><div className={styles.s1}>Multitenancy</div><div className={styles.s2}>First</div></div>
                  <div className={styles.tag}><div className={styles.s1}>No-ORM</div><div className={styles.s2}>Raw SQL</div></div>
                  <div className={styles.tag}><div className={styles.s1}>Scalability</div><div className={styles.s2}>Performance</div></div>
                  <div className={styles.tag}><div className={styles.s1}>PSR</div><div className={styles.s2}>Compatibility</div></div>
                  <div className={styles.tag}><div className={styles.s1}>Metrics</div><div className={styles.s2}>Debug</div></div>
                  <div className={styles.tag}><div className={styles.s1}>Repository</div><div className={styles.s2}>Pattern</div></div>
                </div>
                <div className={styles.makeBy}>
                  <div className={styles.s2}>Made with</div>
                  <div className={styles.s1}><img src={UseCaseIco} /></div>
                  <div className={styles.s2}>by steel balls.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx(styles.slide, styles.slide_1, squares.slide, squares.slide_1)}>
        <div className={clsx(squares.square, squares.square01)}></div>
        <div className={clsx(squares.square, squares.square02)}></div>
        <div className={clsx(squares.square, squares.square03)}></div>
        <div className={clsx(squares.square, squares.square04)}></div>
        <div className={clsx(squares.square, squares.square1)}></div>
        <div className={clsx(squares.square, squares.square2)}></div>
        <div className={clsx(squares.square, squares.square3)}></div>
        <div className={clsx(squares.square, squares.square4)}></div>
        <div className={clsx(squares.square, squares.square5)}></div>
        <div className={clsx(squares.square, squares.square6)}></div>
        <div className={clsx(squares.square, squares.square7)}></div>
        <div className={clsx(squares.square, squares.square8)}></div>
        <div className={styles.title}>High-complexity B2B applications with maximum data isolation.</div>
        <div className={styles.text}>
          Allow yourself to focus on the business logic of a particular tenant. Use Rift to isolate tenant schemes, create configuration repositories, lightning-fast initialization of new tenants, assign tariff plans, SLA support, and complete system diagnostics.
          <br /><br />
          Rift was conceived as a microframe for API gateways in the context of multi-tenant applications. This means that we do not consider using tools like Twig or other template engines for SSR. You also won't find the usual Laravel-like controllers here. Rift is a set of tools, as well as a separate philosophy for developing complex API gateways, and offers a contractual approach to writing business logic.
        </div>
      </div>

      <div className={clsx(styles.area, styles.area_01)}>
        <div className={styles.active}>
          <div className={styles.modalCross1}><Cross size='md' color='white' /></div>
          <div className={styles.modalCross2}><Cross size='sm' /></div>
          <CodeExample />
        </div>
      </div>


      <div className={clsx(styles.area, styles.area_0)}>
        <div className={styles.active}>
          <div  className={styles.block}>
            <div className={styles.title}>Strict contractual execution of the query chain.</div>
            <div className={styles.description}>
              Rift is built around the idea of a standardized response contract for all layers of the application.
              We are well aware of the importance of an explicit chain of application requests in matters related to complex logic.
            </div>
            <br />
            <div className={styles.interTitle}>OperationOutcome</div>
            <div className={styles.description}>
              Object for transferring data between different layers of the application. Imagine that you don't have to write a ton of exceptions and handle them.
              If you have deals with Rust, Java, Kotlin ... with their Result types, you'll find them clearly similar to OperationOutcome.
              <br /><br />
              If you are familiar with the promises of JS or with functional programming in general, you will like the built-in methods for working with OperationOutcome. With their help, you can rely on explicit error handling and logical chain building.
              <br /><br /><br />
              <Link to='docs/v1/basic-concepts/contract'><div className={styles.link}>/ read in the documentation</div></Link>
            </div>
          </div>
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

