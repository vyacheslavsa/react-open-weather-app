import * as React from 'react';
import styles from './UpMenu.module.scss'
import {Link} from "react-router-dom";
import { useState} from "react";
import axios from "axios";
import Dropdown from "../DropDownSearch";



export default function UpMenu() {
    const [searchCity, setSearchCity] = useState('');
    const [openDropDownSearch, setOpenDropDownSearch] = useState(false);
    const [dataCity, setdataCity] = useState([]);

    const getSearchCity = async (e) => {
        if(e.key === 'Enter'){
            await axios
                .get(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=5fb6b5d7b3e1b8e74a3f2ecca13358e5`)
                .then((response) => {
                    setdataCity(response.data)
                    setOpenDropDownSearch(true)
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }
  
  return (
    <div className={styles.head}>
      <div className={styles.logo}>
        <span className="material-symbols-outlined">
          sunny
        </span>
        <div>Your Weather</div>
          <div className={styles.search}>
              <input
                  type="text"
                  onChange={(e)=>setSearchCity(e.target.value)}
                  onKeyDown={(e)=> getSearchCity(e)}
              />
              {openDropDownSearch && <Dropdown data={dataCity} onClose={()=>setOpenDropDownSearch(false)} />}
          </div>
      </div>
      <div className={styles.rightMenu}>
          <Link to='/home'>Home</Link>
          <Link to='/about'><div>About</div></Link>
          <Link to='/settings'>Settings</Link>
          <Link to='/contact'><div>Contact</div></Link>
      </div>
    </div>
  );
}
