import * as React from 'react';
import styles from './UpMenu.module.scss'
import {Link} from "react-router-dom";


export default function UpMenu() {
  
  return (
    <div className={styles.head}>
      <div className={styles.logo}>
        <span className="material-symbols-outlined">
          sunny
        </span>
        <div>Your Weather</div>
      </div>
      <div className={styles.rightMenu}>
          <Link to='/home'>Home</Link>
          <Link to='/About'><div>About</div></Link>
          <Link to='/settings'>Settings</Link>
          <Link to='/Contact'><div>Contact</div></Link>
      </div>
    </div>
  );
}
