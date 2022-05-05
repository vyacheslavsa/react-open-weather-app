import * as React from 'react';
import styles from './UpMenu.module.scss'

export default function UpMenu() {
  return (
    <div className={styles.head}>
      <div className={styles.logo}>
        {/* <span class='material-symbols-outlined'>
          sunny
        </span> */}
        <div>Your Weather</div>
      </div>
      <div className={styles.rightMenu}>
        <div>Home</div>
        <div>About</div>
        <div>Settings</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
