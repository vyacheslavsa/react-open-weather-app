import React, {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getDataCurrentWeather } from '../../actions/actions'
import Content from '../../components/Content'
import MainLoyout from "../../components/MainLoyout";

const Home = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.data.currentWeather) || {}
  const isError = useSelector(state => state.data.errors) || {}
  const isLoading = useSelector(state => state.data.loading)

  useEffect(() => {
    dispatch(getDataCurrentWeather())
  },[])

  // const addCash = () => {
  //   //функция изменения параметра cash+1
  //   dispatch({ type: "ADD_CASH", payload: 1 });
  // }

  // const iconLink = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` || null


  return (
    <MainLoyout>
      <Content data={data} errors={isError} loading={isLoading}/>
    </MainLoyout>
  )
}

export default Home
