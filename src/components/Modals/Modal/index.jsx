import React from 'react';
import styles from './Modal.module.scss'
import {ReactComponent as IconCloud} from "../../../image/logo-weather.svg";

const Modal = ({ children,title }) => (
        <div className={styles.backGround}>
            <div className={styles.root}>
                <div className={styles.header}>
                    <IconCloud/>
                    {/*<span className={styles.close}>+</span>*/}
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>{title}</div>
                    {children}
                </div>
            </div>
        </div>
    );

export default Modal;