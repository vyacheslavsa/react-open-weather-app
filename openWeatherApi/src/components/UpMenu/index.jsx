import * as React from 'react';
import styles from './UpMenu.module.scss'
import {getDataCurrentWeather} from "../../actions/actions";
import {useDispatch} from "react-redux";

export default function UpMenu() {
    const dispatch = useDispatch()
  
  return (
    <div className={styles.head}>
      <div className={styles.logo}>
        <span className="material-symbols-outlined">
          sunny
        </span>
        <div>Your Weather</div>
      </div>
      <div className={styles.rightMenu}>
        <div onClick={()=>dispatch(getDataCurrentWeather())}>Get Data</div>
        <div>About</div>
        <div>Settings</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
