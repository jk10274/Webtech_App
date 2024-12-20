// Author: Jona Kaufmann

import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftHeader}>
        <Link href="/">JK REISEN</Link>
      </div>
      <div className={styles.rightHeader}>
        <Link href="/journeys/add">ADD JOURNEY</Link>
        <Link href="/journeys">VIEW ALL</Link>
      </div>
    </header>
  );
};

export default Header;
