import * as React from 'react';
import styles from './Header.module.scss'
import {Link} from "react-router-dom";
import { useState} from "react";
import Dropdown from "../DropDownSearch";
import {dataSearch} from "../../actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as IconCloud} from "../../image/logo-weather.svg";
import CustomSearch from "../CustomSearch";

export default function Header() {
    const dataResult = useSelector(state => state?.data?.resultSearch);
    const [searchCity, setSearchCity] = useState('');
    const [openDropDownSearch, setOpenDropDownSearch] = useState(false);
    const dispatch = useDispatch();

    const getSearchCity = async (e) => {
        if(e.key === 'Enter'){
            await dispatch(dataSearch(searchCity))
            setOpenDropDownSearch(true)
        }
    }
  
  return (
    <div className={styles.head}>
      <div className={styles.logo}>
          <IconCloud/>
        <div>Your Weather</div>
          <div className={styles.search}>
              <CustomSearch
                  height='40px'
                  onChange={(e)=>setSearchCity(e.target.value)}
                  onKeyDown={(e)=> getSearchCity(e)}
                  deleteValue={()=>setSearchCity('')}
                  onClose={()=>setOpenDropDownSearch(false)}
                  value={searchCity}
              />
              {openDropDownSearch && <Dropdown data={dataResult} onClose={()=>setOpenDropDownSearch(false)} />}
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
