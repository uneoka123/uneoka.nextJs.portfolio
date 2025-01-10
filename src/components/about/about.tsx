import Link from 'next/link';
import Image from 'next/image';

import { Skill } from '@/common/types/types';
import { Icon } from '@/components/icon/icon';
import styles from './styles.module.scss';

const About = () => {
  const skills: Skill[] = [
    { title: 'HTML', iconName: 'html', href: 'https://html.spec.whatwg.org/multipage/' },
    { title: 'CSS', iconName: 'css', href: 'https://www.w3.org/Style/CSS/' },
    { title: 'Sass', iconName: 'sass', href: 'https://sass-lang.com/' },
    { title: 'Tailwind', iconName: 'tailwindcss1', href: 'https://tailwindcss.com/docs/installation' },
    { title: 'JavaScript', iconName: 'js', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/' },
    { title: 'TypeScript', iconName: 'typescript', href: 'https://www.typescriptlang.org/' },
    { title: 'Python', iconName: 'python', href: '/' },
    { title: 'Next.js', iconName: 'nextjs', href: 'https://nextjs.org/' },
    { title: 'React', iconName: 'react', href: 'https://react.dev/' },
    { title: 'VueJs', iconName: 'vue', href: '/' },
    { title: 'Nuxt', iconName: 'nuxt', href: '/' },
    { title: 'NodeJs', iconName: 'node', href: '/' },
    { title: 'NestJs', iconName: 'nest', href: '/' },
    { title: 'Laravel', iconName: 'laravel', href: '/' },
    { title: 'MongoDB', iconName: 'mongoDb', href: '/' },
    { title: 'MySQL', iconName: 'mysql', href: '/' },
    { title: 'Langchain', iconName: 'langchain', href: '/' },
    { title: 'ChatGPT', iconName: 'chatgpt', href: '/' },
    { title: 'Pinecone', iconName: 'pinecone', href: '/' },
    { title: 'Wordpress', iconName: 'wordpress', href: '/' },
    { title: 'Shopify', iconName: 'shopify', href: '/' },
    { title: 'Amazon Web Service', iconName: 'aws', href: '/' },
    { title: 'Azure', iconName: 'azure', href: '/' },
    { title: 'Firebase', iconName: 'firebase', href: '/' },
    { title: 'Git', iconName: 'git', href: '/' },
    { title: 'Gulp', iconName: 'gulp', href: 'https://gulpjs.com/' },
    { title: 'Figma', iconName: 'figma', href: 'https://www.figma.com/' },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.wrapper}>
        <Image
          className={styles.img}
          src="/img/about.png"
          width={550}
          height={320}
          alt="Picture with characters from anime and video games"
        />

        <div className={styles.content}>
          <h2 className={styles.title}>自己紹介</h2>
          <p className={styles.text}>
            <span>こんにちは！</span><br/>
            完全にレスポンシブでユーザー中心のウェブサイトやシステム、AIプロジェクトの制作に情熱を注いでいるソリューション重視のエンジニアです。
            <span>JavaScript</span>、<span>TypeScript</span>、<span>Python</span>、<span>PHP</span>などのプログラミング言語やフレームワークに精通しています。<br/>
            現在は<span>React</span>、<span>Next.js</span>、<span>TypeScript</span>、<span>Node.js</span>、<span>ChatGPT-4o</span>に深く関わり、限界を広げることに取り組んでいます。
            技術を磨き、常に進化する業界のトレンドに遅れないよう努力し続けています。
          </p>
        </div>
      </div>

      <div className={styles.skills}>
        <h3 className={styles.skillsTitle}>スキル</h3>
        <ul className={styles.skillsList}>
          {skills.map(skill => (
            <li key={skill.title}>
              <Link
                className={styles.skillsLink}
                href={skill.href}
                title={skill.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  aria-label={skill.title + ' logo'}
                  name={skill.iconName}
                  size={50}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { About };