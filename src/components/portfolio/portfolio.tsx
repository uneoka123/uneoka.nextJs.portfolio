import Link from 'next/link';

import { Card } from '@/components/card/card';
import { VideoCard } from '@/components/videocard/videocard';
import styles from './styles.module.scss';

const Portfolio = () => {
  return (
    <section id="projects" className={styles.portfolio}>
      <h2 className={styles.title}>
        Projects
      </h2>

      <ul className={styles.list}>
        <li>
          <Card
            img={['/img/works/2-1.PNG', '/img/works/2-2.PNG', '/img/works/2-5.PNG', '/img/works/2-3.PNG', '/img/works/2-4.PNG']}
            title="画像ジェネレーター"
            description="高品質のカスタムイメージジェネレータを製作しました。"
            href="https://ig-brand.jp/"
            githubUrl=""
            topics={['nextjs', 'typescript', 'mongoDb', 'tailwindcss', 'chatgpt']}
          />
        </li>
        <li>
          <Card
            img={['/img/works/3-1.png', '/img/works/3-3.png', '/img/works/3-2.png', '/img/works/3-4.PNG', '/img/works/3-5.PNG']}
            title="画像ジェネレーター"
            description="高品質のカスタムイメージジェネレータを製作しました。"
            href="https://idolly.ai/"
            githubUrl=""
            topics={['nextjs', 'typescript', 'mongoDb', 'tailwindcss', 'chatgpt']}
          />
        </li>
      </ul>
      <ul className={styles.list}>
        <li>
          <VideoCard
            video='/img/works/m2.mp4'
            title='不動産'
            description='個人と家族が完備された家具が備わる住宅の一つに素早く定着するのに役立つ家具賃貸サイトを製作しました。'
            href='https://chat.chatgptdemo.net/'
            githubUrl=''
            topics={['wordpress', 'mysql', 'figma']}
          />
        </li>
        <li>
          <VideoCard
            video='/img/works/Eldoah.mp4'
            title='不動産'
            description='個人と家族が完備された家具が備わる住宅の一つに素早く定着するのに役立つ家具賃貸サイトを製作しました。'
            href='https://www.eldoah.com/'
            githubUrl=''
            topics={['wordpress', 'mysql', 'figma']}
          />
        </li>
      </ul>
      <ul className={styles.list}>
        <li>
          <VideoCard
            video='/img/works/round.mp4'
            title='不動産'
            description='個人と家族が完備された家具が備わる住宅の一つに素早く定着するのに役立つ家具賃貸サイトを製作しました。'
            href='https://www.around.co/'
            githubUrl=''
            topics={['wordpress', 'mysql', 'figma']}
          />
        </li>
        <li>
          <VideoCard
            video='/img/works/fashon.part.mp4'
            title='不動産'
            description='個人と家族が完備された家具が備わる住宅の一つに素早く定着するのに役立つ家具賃貸サイトを製作しました。'
            href='https://www.eldoah.com/'
            githubUrl=''
            topics={['wordpress', 'mysql', 'figma']}
          />
        </li>
      </ul>
    </section>
  );
};

export { Portfolio };
