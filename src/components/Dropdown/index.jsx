import React, {useState} from 'react';
import styles from "../../components/Dropdown/Dropdown.module.scss";
import {ReactComponent as MoreInfo} from "../../image/expand_more_FILL0_wght400_GRAD0_opsz48.svg";
import {useDispatch, useSelector} from "react-redux";
import {setLanguage} from "../../redusers/reduser";
import {allLanguage} from "../../constans";
import cs from "classnames";


function Dropdown({children}) {
    const [showList, setShowList] = useState(false);
    const dispatch = useDispatch();
    const currentLanguage = useSelector(state => state.data.interfaceLanguage);
    const storageLang = JSON.parse(localStorage.getItem('CURRENT_LANG'));
    const lang = storageLang || currentLanguage;
    const arrayLang = Object.keys(allLanguage);

    const showLanguage = (item) => {
        dispatch(setLanguage(item));
        setShowList(false);
        localStorage.setItem('CURRENT_LANG', JSON.stringify(item))
    };

    return (<div className={styles.main} onClick={() => setShowList(!showList)}>
        {children}
        <div className={styles.currentLanguage}>{lang.toUpperCase()}</div>
        <div className={cs(styles.iconMore, {[styles.transform]: showList})}>
            <MoreInfo/>
        </div>
        {showList && <div className={styles.list}>
            {arrayLang.map((item, index) => <div
                className={styles.item}
                onClick={() => showLanguage(item)}
                key={index}
            >
                {arrayLang[index].toUpperCase()}
            </div>)}

        </div>}
    </div>);
}

export default Dropdown;