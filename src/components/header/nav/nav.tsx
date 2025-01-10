'use client';

import { useState } from 'react';
import Link from 'next/link';

import { cn } from '@/helpers/helpers';
import styles from './styles.module.scss';

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => setShowNav(!showNav);
  const closeNav = () => setShowNav(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'certifies', label: 'Certifies' },
    { id: 'projects', label: 'Projects' },
    { id: 'contacts', label: 'Contacts' },
  ];

  return (
    <nav className={cn(styles.nav, showNav && styles.navActive)}>
      <button
        className={styles.navToggle}
        aria-label="Toggle navigation"
        onClick={toggleNav}
      >
        <span className={styles.navToggleItem}></span>
      </button>

      <ul className={styles.navList}>
        {navItems.map(item => (
          <li key={item.id} className={styles.navItem}>
            <Link
              className={styles.navLink}
              href={'/#' + item.id}
              onClick={closeNav}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Nav };
