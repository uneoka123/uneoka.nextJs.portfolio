'use client';

import { useEffect } from 'react';
import { PC } from '@/components/pc/pc';
import styles from './styles.module.scss';
import { renderCanvas } from './renderCanvas';

const Intro = () => {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section id="home" className={styles.intro}>
      <PC className={styles.pc} />

      <div className={styles.description}>
        <h1 className={styles.title}>
          Nice to meet you! 👋
          <br />
          This is <span>Kenta Uneoka</span>
        </h1>
        <p className={styles.text}>
          I am an innovative <span>AI</span> and <span>full-stack</span> engineer with 8 years of extensive experience in developing robust and scalable <span>web systems</span>, particularly in Natural Language Processing <span>(NLP)</span>.<br />
          This is my small portfolio site.<br />
          Thank you for visiting.<br />
          I hope you enjoy my portfolio.
        </p>
      </div>
      <canvas className={styles.canvas} id="canvas"></canvas>
    </section>
  );
};

export { Intro };
