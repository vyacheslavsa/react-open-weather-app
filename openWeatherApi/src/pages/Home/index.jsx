import React from 'react'
import { useDispatch } from 'react-redux'
import { getDataCurrentWeather } from '../../actions/actions'
import UpMenu from '../../components/UpMenu/index'
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
    <div className={StyleSheet.page}>
      <UpMenu />
      <Content />
      <button onClick={() => getData()}>Получить данные</button>
    </div>
  )
}
