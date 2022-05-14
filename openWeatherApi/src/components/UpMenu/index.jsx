import * as React from 'react';
import styles from './UpMenu.module.scss'

export default function UpMenu({getData}) {
  
  return (
    <div className={styles.head}>
      <div className={styles.logo}>
        <span className="material-symbols-outlined">
          sunny
        </span>
        <div>Your Weather</div>
      </div>
      <div className={styles.rightMenu}>
        <div onClick={()=>getData()}>Get Data</div>
        <div>About</div>
        <div>Settings</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
