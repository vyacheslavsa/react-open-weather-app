import React from 'react'
import MainLoyout from "../../components/MainLoyout";
import styles from './Settings.module.scss'

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
                      <div className={styles.itemSettings}/>
                      <div className={styles.itemSettings}/>
                      <div className={styles.itemSettings}/>
                      <div className={styles.itemSettings}/>
                      <div className={styles.itemSettings}/>
                  </div>
              </div>
          </div>
      </MainLoyout>
  )
}

export default Settings
