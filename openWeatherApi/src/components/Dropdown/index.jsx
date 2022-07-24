import React, {useState} from 'react';
import styles from "../../components/Dropdown/Dropdown.module.scss";
import { ReactComponent as MoreInfo } from "../../image/expand_more_FILL0_wght400_GRAD0_opsz48.svg";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../redusers/reduser";
import { allLanguage } from "../../constans";


function Dropdown({children,currentLanguage}) {
    const [showList, setShowList] = useState(false);
    const dispatch = useDispatch();

    const showLanguage = (item) => {
        dispatch(setLanguage(item))
    }

    return (
        <div className={styles.main}>
            {children}
            <div className={styles.currentLanguage}>{currentLanguage}</div>
            <div onClick={() => setShowList(!showList)} className={styles.iconMore}>
                <MoreInfo/>
            </div>
            {showList &&
                <div className={styles.list}>
                    {allLanguage.map((item,index) =>
                        <div className={styles.item} onClick={()=>showLanguage(item)}>{allLanguage[index]}</div>
                    )}

                </div>
            }
        </div>
    );
}

export default Dropdown;