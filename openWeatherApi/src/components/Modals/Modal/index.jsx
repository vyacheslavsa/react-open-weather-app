import React from 'react';
import styles from './Modal.module.scss'

const Modal = ({ children,title }) => (
        <div className={styles.backGround}>
            <div className={styles.root}>
                <div className={styles.header}/>
                <div className={styles.content}>
                    <div className={styles.title}>{title}</div>
                    {children}
                </div>
            </div>
        </div>
    );

export default Modal;