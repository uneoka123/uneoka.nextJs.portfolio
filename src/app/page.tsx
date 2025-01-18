import { Intro } from '@/components/intro/intro';
import { About } from '@/components/about/about';
import { Certify } from '@/components/skill-certify/certify';
import { Portfolio } from '@/components/portfolio/portfolio';
import { Contacts } from '@/components/contacts/contacts';
import styles from './styles.module.scss';


const Home = () => {
  return (
    <div className={styles.container}>
      <Intro />
      <About />
      <Certify />
      <Portfolio />
      <Contacts />
    </div>
  );
};

export default Home;
