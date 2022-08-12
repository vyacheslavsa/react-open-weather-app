import React, {useState} from 'react';
import styles from "../../components/Dropdown/Dropdown.module.scss";
import { ReactComponent as MoreInfo } from "../../image/expand_more_FILL0_wght400_GRAD0_opsz48.svg";
import {useDispatch, useSelector} from "react-redux";
import { setLanguage } from "../../redusers/reduser";
import { allLanguage } from "../../constans";


function Dropdown({children}) {
    const [showList, setShowList] = useState(false);
    const dispatch = useDispatch();
    const currentLanguage = useSelector(state => state.data.interfaceLanguage);
    const storageLang = JSON.parse(localStorage.getItem('CURRENT_LANG'));

    const showLanguage = (item) => {
        dispatch(setLanguage(item));
        setShowList(false);
        localStorage.setItem('CURRENT_LANG', JSON.stringify(item))
    };

    const arrLang = () => {
        const result = [];
        for (const key in allLanguage) {
            result.push(key)
        }
        return result;
    };

    return (
        <div className={styles.main} onClick={() => setShowList(!showList)}>
            {children}
            <div className={styles.currentLanguage}>{storageLang ? storageLang : currentLanguage}</div>
            <div className={styles.iconMore}>
                <MoreInfo/>
            </div>
            {showList &&
                <div className={styles.list}>
                    {arrLang().map((item,index) =>
                        <div
                            className={styles.item}
                            onClick={()=>showLanguage(item)}
                            key={index}
                        >
                            {arrLang()[index]}
                        </div>
                    )}

                </div>
            }
        </div>
    );
}

export default Dropdown;