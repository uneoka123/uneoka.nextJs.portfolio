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
            img={['/img/works/2-1.png', '/img/works/2-2.PNG', '/img/works/2-5.PNG', '/img/works/2-3.PNG', '/img/works/2-4.PNG']}
            title="Brand Site of IG Securities Co., Ltd."
            description={
              <>
                - Developed using React and TailwindCSS in collaboration with a designer <br />
                - Revenue increased by 27% <br />
                - Fixed more than 20 issues
              </>
            }
            href="https://ig-brand.jp/"
            githubUrl=""
            topics={['react', 'typescript', 'tailwindcss']}
          />
        </li>
        <li>
          <Card
            img={['/img/works/3-1.png', '/img/works/3-3.png', '/img/works/3-2.PNG', '/img/works/3-4.PNG', '/img/works/3-5.PNG']}
            title="Image Generator"
            description={
              <>
                - Built with Next.js and Tailwind CSS for a responsive and engaging design<br />
                - Developed Text to Image function using DALL-e<br />
                - Fixed more than 20 issues<br />
              </>
            }
            href="https://idolly.ai/"
            githubUrl=""
            topics={['nextjs', 'typescript', 'mongoDb', 'tailwindcss', 'chatgpt', 'azure']}
          />
        </li>
      </ul>
      <ul className={styles.list}>
        <li>
          <VideoCard
            video='/img/works/round.mp4'
            title='Online Meeting System'
            description={
              <>
                - Implemented real-time video meeting function using Web RTC<br />
                - Implemented real-time chat using Web Socket<br />
                - ​​Implemented Auth function using Firebase Authentication<br />
                - Fixed more than 40 issues<br />
                - Updated some UI
              </>
            }
            href='https://www.around.co/'
            githubUrl=''
            topics={['react', 'node', 'firebase', 'figma']}
          />
        </li>
        <li>
          <VideoCard
            video='/img/works/m2.mp4'
            title='NLP Chatbot'
            description={
              <>
                Released the MVP of our NLP chatbot.<br />
                - Integrated Pinecone API, OpenAI API and Rest API<br />
                - Uploading a document, the data was read and stored as metadata in Pinecone<br />
                - Embed metadata into ChatGPT using LangChain and then generated accurate answers<br />
                - Enhanced response accuracy to over 95% using prompt engineering<br />
              </>
            }
            href='https://chat.chatgptdemo.net/'
            githubUrl=''
            topics={['react', 'tailwindcss', 'django', 'mysql', 'chatgpt', 'langchain', 'pinecone']}
          />
        </li>
      </ul>
      <ul className={styles.list}>
        <li>
          <VideoCard
            video='/img/works/fashon.part.mp4'
            title='NLP Chatbot'
            description={
              <>
                - Developed NLP chatbot using react, node.js, LangChain, Pinecone, Claude for Shopping<br />
                - Deployed this chatbot on AWS<br />
                - Integrated it to Shopify site<br />
                - Enhanced user experience by providing quick and accurate responses. <br />
                - Site usage Increased by 50% <br />
              </>
            }
            href='https://fashionspark.com/'
            githubUrl=''
            topics={['react', 'typescript', 'tailwindcss', 'node', 'langchain', 'claude', 'pinecone', 'aws']}
          />
        </li>
        <li>
          <VideoCard
            video='/img/works/Eldoah.mp4'
            title='Discord Bot'
            description={
              <>
                - Obtained betting results using web scraping<br />
                - Analyzed betting results in backend<br />
                - Delivered betting results to Discord using Discord API<br />
                - Increased profits by 43% with a real-time information based betting strategies
              </>
            }
            href='https://www.eldoah.com/'
            githubUrl=''
            topics={['python', 'discord', 'bot']}
          />
        </li>
      </ul>
      <ul className={styles.list}>
        <li>
          <Card
            img={['/img/works/4-1.png', '/img/works/4-3.png', '/img/works/4-4.png', '/img/works/4-5.png']}
            title="Website of Holland International School(HIS)"
            description={
              <>
                - Developed backend using Django <br />
                - Integrated 5+ APIs <br />
                - Updated Some UI
              </>
            }
            href="https://www.hollandinternationalschool.sg/"
            githubUrl=""
            topics={['vue', 'tailwindcss', 'python', 'django', 'postgresql', 'googleCloud']}
          />
        </li>
        <li>
          <Card
            img={['/img/works/5-6.png', '/img/works/5-2.PNG', '/img/works/5-3.PNG', '/img/works/5-4.png', '/img/works/5-5.png']}
            title="Online Real Estate Platform"
            description={
              <>
                - Simplified the process of buying, selling, and renting real estate by providing a user-friendly interface and a variety of search tools<br />
                - Integrated payment APIs and Rest API<br />
                - Fixed more than 20 issues<br />
              </>
            }
            href="https://idolly.ai/"
            githubUrl=""
            topics={['nextjs', 'typescript', 'tailwindcss', 'nest', 'mysql', 'nginx']}
          />
        </li>
      </ul>
    </section>
  );
};

export { Portfolio };
