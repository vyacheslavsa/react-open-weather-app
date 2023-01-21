import React from 'react'
import MainLoyout from "../../components/MainLoyout";
import styles from './Settings.module.scss'
import {ReactComponent as IconEarth} from "../../assets/svg/language_FILL0_wght400_GRAD0_opsz48.svg";
import Dropdown from "../../components/Dropdown";

function Settings() {
    return (
        <MainLoyout>
            <div className={styles.content}>
                <div className={styles.root}>
                    <div className={styles.settingsBlock}>
                        <Dropdown>
                            <div className={styles.leftContent}>
                                <IconEarth/>
                                <div className={styles.description}>Select Language</div>
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </MainLoyout>
    )
}

export default Settings
