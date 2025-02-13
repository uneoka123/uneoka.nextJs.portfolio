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
    { title: 'Express', iconName: 'express', href: 'https://www.expressjs.org/' },
    { title: 'NestJs', iconName: 'nest', href: '/' },
    { title: 'Django', iconName: 'django', href: '/' },
    { title: 'MongoDB', iconName: 'mongoDb', href: '/' },
    { title: 'MySQL', iconName: 'mysql', href: '/' },
    { title: 'PostgreSQL', iconName: 'postgresql', href: '/' },
    { title: 'Langchain', iconName: 'langchain', href: '/' },
    { title: 'ChatGPT', iconName: 'chatgpt', href: '/' },
    { title: 'Claude', iconName: 'claude', href: '/' },
    { title: 'Pinecone', iconName: 'pinecone', href: '/' },
    { title: 'Amazon Web Service', iconName: 'aws', href: '/' },
    { title: 'Azure', iconName: 'azure', href: '/' },
    { title: 'Google Cloude Platform', iconName: 'googleCloud', href: '/' },
    { title: 'Niginx', iconName: 'nginx', href: '/' },
    { title: 'Firebase', iconName: 'firebase', href: '/' },
    { title: 'Docker', iconName: 'docker', href: '' },
    { title: 'Git', iconName: 'git', href: '/' },
    { title: 'Gulp', iconName: 'gulp', href: 'https://gulpjs.com/' },
    { title: 'Figma', iconName: 'figma', href: 'https://www.figma.com/' },
  ];


  return (
    <section id="about" className={styles.about}>
      <div className={styles.wrapper}>
        <Image
          className={styles.img}
          src="/img/about1.jpg"
          width={500}
          height={100}
          alt="Your photo"
        />
        <div className={styles.content}>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.text}>
            <p>
              I possess strong proficiency in modern web programming languages, including <span>JavaScript</span>, <span>TypeScript</span>,
              <span>Python</span>, <span>React</span>, <span>Next.js</span>, <span>Vue.js</span>, <span>Node.js</span>, <span>Nest.js</span>,
              and <span>Django</span>, as well as <span>AI</span> application development frameworks like <span>LangChain</span>.<br />
            </p>
            <p>
              I excel at collaborating with cross-functional teams to define project requirements, design architecture, and execute full-stack
              development projects from conception to deployment.<br />
            </p>
            <p>
              Passionate about emerging technologies, I continually seek opportunities to enhance coding practices and software functionality.<br />
            </p>
            <p>
              I am committed to fostering a culture of learning and mentoring within teams to elevate our collective technical expertise.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.skills}>
        <h3 className={styles.skillsTitle}>Skills</h3>
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