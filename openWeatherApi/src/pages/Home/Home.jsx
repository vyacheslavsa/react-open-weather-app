import React from 'react'
import {  useEffect } from 'react'

import styles from './Home.module.scss'
import { useDispatch } from 'react-redux'
import { getDataCurrentWeather } from '../../actions/actions'

export default function Home() {




  const dispatch = useDispatch()
  

  useEffect(()=>{
    dispatch(getDataCurrentWeather())
  },[])

  

  return (
    <div className={styles.test} onClick={()=>test()} >123</div>
  )
}
