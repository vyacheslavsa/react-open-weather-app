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

    const showLanguage = (item) => {
        dispatch(setLanguage(item));
        setShowList(false);
    }

    return (
        <div className={styles.main} onClick={() => setShowList(!showList)}>
            {children}
            <div className={styles.currentLanguage}>{currentLanguage}</div>
            <div className={styles.iconMore}>
                <MoreInfo/>
            </div>
            {showList &&
                <div className={styles.list}>
                    {allLanguage.map((item,index) =>
                        <div
                            className={styles.item}
                            onClick={()=>showLanguage(item)}
                            key={index}
                        >
                            {allLanguage[index]}
                        </div>
                    )}

                </div>
            }
        </div>
    );
}

export default Dropdown;