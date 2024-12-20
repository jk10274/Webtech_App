import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftHeader}>
      <Link href="/">JK REISEN</Link>
      </div>
      <div className={styles.rightHeader}>
        <Link href="/journeys/add">REISE HINZUFÜGEN</Link>
        <Link href="/journeys">ALLE REISEN</Link>
      </div>
    </header>
  );
};

export default Header;