import { Card } from '@/components/card/card';
import { VideoCard } from '@/components/videocard/videocard';
import styles from './styles.module.scss';

const Works = () => {
  return (
    <section className={styles.works}>
      <div className={styles.container}>
        <h1 className={styles.title}>Archive</h1>

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
              href="https://idolly.ai"
              githubUrl=""
              topics={['nextjs', 'typescript', 'node', 'mongoDb', 'tailwindcss', 'azure']}
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
          <li>
            <Card
              img="/img/works/2-4.png"
              title="ポータルサイト"
              description="このプラットフォームは、ホテル、フライト、アクティビティの予約オプションを提供し、旅行計画のための包括的なリソースになります。"
              href="https://www.tripadvisor.com/"
              githubUrl=""
              topics={['react', 'tailwindcss', 'nest', 'mongoDb',]}
            />
          </li>
          <li>
            <Card
              img="/img/works/6-2.png"
              title="Avatarチャットボット"
              description="Holoworld AI は、お気に入りの AI キャラクターやアバターとチャットできるプラットフォームです。"
              href="https://www.holoworldai.com"
              githubUrl=""
              topics={['nextjs', 'typescript', 'tailwindcss', 'chatgpt', 'langchain', 'azure']}
            />
          </li>
          <li>
            <VideoCard
              video="/img/works/Eldoah.mp4"
              title="スクレイピングとDiscord Bot"
              description="サイトからエボリューションゲームの結果を取得し、それを分析してDiscordサーバーに配信するボットを開発しました。"
              href="https://www.eldoah.com/"
              githubUrl=""
              topics={['python', 'bot']}
            />
          </li>
          <li>
            <Card
              img="/img/works/ad.png"
              title="Amazon広告分析システム"
              description="このシステムのフロントエンドを開発しました。"
              href="https://amazon-ads-system-frontend.onrender.com/ja/dashboard"
              githubUrl=""
              topics={['nextjs', 'prisma', 'typescript', 'tailwindcss']}
            />
          </li>
          <li>
            <Card
              img="/img/works/safari.jpg"
              title="サファリ"
              description="静的なマルチページストア。"
              href="https://uneoka123.github.io/safari-landing/"
              githubUrl=""
              topics={['jinja', 'gulp', 'sass']}
            />
          </li>
          <li>
            <Card
              img="/img/works/4-2.png"
              title="マッチングサイト"
              description="さまざまなカテゴリの地域サービス専門家と個人を結びつけるプラットフォームです。"
              href="https://www.thumbtack.com/"
              githubUrl=""
              topics={['nextjs', 'tailwindcss', 'node', 'aws']}
            />
          </li>
          <li>
            <Card
              img="/img/works/5-1.png"
              title="顧客管理システム"
              description="Req は通常、チームや組織内でのコミュニケーション、コラボレーション、効率性を高める機能を提供しています。"
              href="https://req.co/"
              githubUrl=""
              topics={['vue', 'css', 'laravel', 'mariadb']}
            />
          </li>
          <li>
            <Card
              img="/img/works/7-1.png"
              title="ECサイト"
              description="このサイトでは、一般的に国内外の市場に対応するさまざまなコレクションやアイテムを含む製品ラインナップを紹介します。"
              href="https://www.nikko-tabletop.jp/"
              githubUrl=""
              topics={['shopify', 'aws']}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Works;
