'use client';

import Link from 'next/link';

import { Icon } from '@/components/icon/icon';
import styles from './styles.module.scss';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          <span>
            © {new Date().getFullYear().toString()}&nbsp;
            Made with<span className={styles.heart}>&#10084;</span> by&nbsp;
          </span>
          <button className={styles.name} onClick={handleScrollToTop}>
            Kenta&nbsp;Uneoka
            <Icon
              className={styles.icon}
              name="rocket"
              aria-label="rocket icon"
            />
          </button>
        </p>
      </div>
    </footer>
  );
};

export { Footer };