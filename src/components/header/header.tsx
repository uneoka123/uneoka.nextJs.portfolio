import { Logo } from '@/components/logo/logo';
import { Nav } from './nav/nav';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo className={styles.logo} />
        <Nav />
      </div>
    </header>
  );
};

export { Header };