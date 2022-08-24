import React from 'react';
import styles from './SideBar.module.scss'
import cs from "classnames";
import {ReactComponent as IconBack} from "../../../src/image/back.svg";
import {ReactComponent as SettingsIcon} from "../../image/settings_FILL0_wght300_GRAD200_opsz48.svg";
import {Link} from "react-router-dom";

const SideBar = ({ onClose, state }) => {
    return (
        <div className={cs(styles.root, {[styles.openBar]: state})}>
            <div className={styles.header}>
                <div onClick={() => onClose()} className={styles.backBlock}>
                    <IconBack/>
                    <span>back</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Menu</div>
            </div>
            <div className={styles.content} onClick={() => onClose()}>
                <Link to='/settings'>
                    <div className={styles.item}>
                        <div className={styles.itemContent}>
                            <SettingsIcon/>
                            <span>Settings</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default SideBar;