import { PC } from '@/components/pc/pc';
import styles from './styles.module.scss';

const Intro = () => {
  return (
    <section id="home" className={styles.intro}>
      <PC className={styles.pc} />

      <div className={styles.description}>
        <h1 className={styles.title}>
          初めまして! 👋
          <br />
          私は <span>畝岡 謙多と申します。</span>
        </h1>
        <p className={styles.text}>
          私は8年間の経験を持つAIとフルスタックエンジニアです。<br/>
          これは私の小さなポートフォリオサイトです。<br/>
          ご訪問いただきありがとうございます。<br/>
          私のポートフォリオを楽しんでいただければ幸いです。
        </p>
      </div>
    </section>
  );
};

export { Intro };
