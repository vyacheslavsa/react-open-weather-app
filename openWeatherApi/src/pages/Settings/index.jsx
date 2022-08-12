import React from 'react'
import MainLoyout from "../../components/MainLoyout";
import styles from './Settings.module.scss'
import {ReactComponent as IconEarth} from "../../image/language_FILL0_wght400_GRAD0_opsz48.svg";
import Dropdown from "../../components/Dropdown";

function Settings() {
    return (
        <MainLoyout>
            <div className={styles.content}>
                <div style={{
                    width: '500px',
                    height: '500px',
                    perspectiveOrigin: 'center',
                    perspective: '500px'
                }}>
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
