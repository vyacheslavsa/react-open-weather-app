import React from 'react';
import styles from './LoadingContainer.module.scss'

const LoadingContainer = ({width = '200px', height = '50px', borderRadius = '15px', margin}) => {
    return (
        <div
            className={styles.root}
            style={{
                width: width,
                height: height,
                borderRadius: borderRadius,
                margin: margin
            }}
        />
    );
}

export default LoadingContainer;