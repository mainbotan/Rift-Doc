import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { Button } from '../../ui-kit/Button';

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
                  <Button color='contrast' size='md' text='Documentation' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
