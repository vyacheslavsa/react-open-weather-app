import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getDataCurrentWeather } from '../../actions/actions'
import ButtonAppBar from '../../components/Header'
import Content from '../../components/Content'

export default function Home() {

  const dispatch = useDispatch()
  

  // useEffect(() => {
  //   dispatch(getDataCurrentWeather())
  // })

  // const addCash = () => {
  //   //функция изменения параметра cash+1
  //   dispatch({ type: "ADD_CASH", payload: 1 });
  // }

  const getData = () => {
    dispatch(getDataCurrentWeather())
  }

  return (
    <>
      <button onClick={()=>getData()}>Получить данные</button>
      <ButtonAppBar />
      <Content/>
    </>
  )
}
