import Link from 'next/link';

import { Card } from '@/components/card/card';
import { VideoCard } from '@/components/videocard/videocard';
import styles from './styles.module.scss';

const Portfolio = () => {
  return (
    <section id="projects" className={styles.portfolio}>
      <h2 className={styles.title}>
        プロジェクト
      </h2>

      <ul className={styles.list}>
        <li>
          <VideoCard
            video='/img/works/1-1.mp4'
            title='不動産'
            description='個人と家族が完備された家具が備わる住宅の一つに素早く定着するのに役立つ家具賃貸サイトを製作しました。'
            href='https://arealhomeaway.com'
            githubUrl=''
            topics={['wordpress', 'mysql', 'figma']}
          />
        </li>
        <li>
          <Card
            img="/img/works/3-1.png"
            title="画像ジェネレーター"
            description="高品質のカスタムイメージジェネレータを製作しました。"
            href="https://idolly.ai/"
            githubUrl=""
            topics={['nextjs', 'typescript', 'mongoDb', 'tailwindcss', 'chatgpt']}
          />
        </li>
        <li>
          <VideoCard
            video="/img/works/oil.mp4"
            title="チャットボット"
            description="RAG技術を用いてユーザーフレンドリーなNLPチャットボットを制作し、サイトに統合しました。"
            href="https://doctorsoil.co.jp/column/efficacy/article-250"
            githubUrl=""
            topics={['react', 'typescript', 'tailwindcss', 'langchain', 'chatgpt', 'pinecone']}
          />
        </li>
      </ul>
      <Link className={styles.btn} href="/works">
        もっと見る
      </Link>
    </section>
  );
};

export { Portfolio };
