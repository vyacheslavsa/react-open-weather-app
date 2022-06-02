import React, {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {getDataCurrentCity, getDataCurrentWeather} from '../../actions/actions'
import Content from '../../components/Content'
import MainLoyout from "../../components/MainLoyout";

const Home = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state?.data?.currentWeather) || {}
  const isError = useSelector(state => state?.data?.errors) || {}
  const isLoading = useSelector(state => state?.data?.loading) || true
  const currentCity = useSelector(state => state?.data?.currentCity) || {}


  useEffect(() => {
    dispatch(getDataCurrentWeather())
    dispatch(getDataCurrentCity())
  },[])




  return (
    <MainLoyout>
      <Content
          data={data}
          errors={isError}
          loading={isLoading}
          currentCity={currentCity}
      />
    </MainLoyout>
  )
}

export default Home
