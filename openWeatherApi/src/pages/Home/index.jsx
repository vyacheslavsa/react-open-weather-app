import React, {useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {getDataCurrentCity, getDataCurrentWeather} from '../../actions/actions'
import Content from '../../components/Content'
import MainLoyout from "../../components/MainLoyout";
import ModalSelectPositions from "../../components/Modals/ModalSelectPositions";

const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state?.data?.currentWeather) || {};
    const isError = useSelector(state => state?.data?.errors) || {};
    const isLoading = useSelector(state => state?.data?.loading);
    const currentCity = useSelector(state => state?.data?.currentCity);
    const language = useSelector(state => state?.data?.interfaceLanguage);
    const [modalSelectRegion, setModalSelectRegion] = useState(false)
    const [showCity, setShowCity] = useState(false);
    const currentGEO = JSON.parse(localStorage.getItem('GEOLOCATIONS'));


    const locateCity = () => {
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                dispatch(getDataCurrentCity(position.coords.latitude,position.coords.longitude))
            }
        );
    }

    useEffect(()=>{
        localStorage.setItem('CURRENT_LANG', JSON.stringify(language))
        if(currentGEO){
            dispatch(getDataCurrentWeather(currentGEO.lat, currentGEO.lon, language));
            dispatch(getDataCurrentCity(currentGEO.lat, currentGEO.lon));
        } else {
            setModalSelectRegion(true);
        }
    },[]);

    useEffect(()=>{
        if(currentCity.length) setShowCity(true);
    },[currentCity])


  return (
      <>
        <MainLoyout>
          <Content
              data={data}
              errors={isError}
              loading={isLoading}
              currentCity={currentCity}
          />
        </MainLoyout>
        {
            modalSelectRegion &&
           <ModalSelectPositions
               onClose={()=>setModalSelectRegion(false)}
               locateCity={()=>locateCity()}
               showCity={showCity}
               currentCity={currentCity}
           />
        }
      </>
  )
}

export default Home
