import React, {useCallback, useEffect, useMemo} from 'react'
import styles from './Home.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getDataCurrentWeather } from '../../actions/actions'

export default function Home() {
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getDataCurrentWeather())
  })

  const addCash = () => {
    //функция изменения параметра cash+1
    dispatch({ type: "ADD_CASH", payload: 1 });
  }

  return (
    <>
    <button onClick={()=>addCash()}>click</button>
    </>
  )
}
