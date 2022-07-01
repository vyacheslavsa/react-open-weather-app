import React, {useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {getDataCurrentCity, getDataCurrentWeather} from '../../actions/actions'
import Content from '../../components/Content'
import MainLoyout from "../../components/MainLoyout";
import ModalSelectRegion from "../../components/ModalSelectRegion";

const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state?.data?.currentWeather) || {};
    const isError = useSelector(state => state?.data?.errors) || {};
    const isLoading = useSelector(state => state?.data?.loading);
    const currentCity = useSelector(state => state?.data?.currentCity);
    const [modalSelectRegion, setModalSelectRegion] = useState(false)

    // useEffect( () => {
    //     dispatch(getDataCurrentWeather());
    //     dispatch(getDataCurrentCity());
    // },[]);



    // var testObject = { 'one': 1, 'two': 2, 'three': 3 };
    //
    // localStorage.setItem('testObject', JSON.stringify(testObject));
    //
    // var retrievedObject = localStorage.getItem('testObject');
    //
    // console.log('retrievedObject: ', JSON.parse(retrievedObject));


    const locateCity = () => {
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                alert('Последний раз вас засекали здесь: ' +
                    position.coords.latitude + ", " + position.coords.longitude);
            }
        );
    }




    useEffect(()=>{
        if(localStorage.currentGeo) return
        setModalSelectRegion(true);
    },[])

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
    {modalSelectRegion &&
        <ModalSelectRegion
            onClose={()=>setModalSelectRegion(false)}
            locateCity={()=>locateCity()}/>}
      </>
  )
}

export default Home
