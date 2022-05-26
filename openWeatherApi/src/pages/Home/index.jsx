import React, {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getDataCurrentWeather } from '../../actions/actions'
import UpMenu from '../../components/UpMenu/index'
import Content from '../../components/Content'
import styles from './Home.module.scss'

export default function Home() {

  const dispatch = useDispatch()
  const data = useSelector(state => state.data.currentWeather) || {}
  const isError = useSelector(state => state.data.errors) || {}
  const isLoading = useSelector(state => state.data.loading)





  // useEffect(() => {
  //   dispatch(getDataCurrentWeather())
  // },[])



  // const addCash = () => {
  //   //функция изменения параметра cash+1
  //   dispatch({ type: "ADD_CASH", payload: 1 });
  // }


  

  // const iconLink = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` || null

  // const converterDate = (number) => {
  //   return {
  //     'format_one': new Date(number * 1000),
  //     'format_two': new Date(number * 1000).toISOString(),
  //     'format_three': new Date(number * 1000).toLocaleDateString("ru-RU"),
  //   }
  // }

  return (
    <div className={styles.pageHome}>
      <UpMenu/>
      <Content data={data} errors={isError} loading={isLoading}/>
    </div>
  )
}
