import React, {useEffect,useState} from 'react'
import Navbar from '../Navbar/Navbar';
import styles from "./Homepage.module.css"
import Card from './Card/Card';
import ListElement from './ListElement';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch } from 'react-redux';
import { allQueues, getNearby } from '../../../redux/actions/LayoutAction';
import { useSelector } from 'react-redux/es/exports';

const HomePage = () => {
  const [loc,setLoc]= useState({
    lat: 0,
    long: 0
 });


function getLocation() {
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition);
       console.log(parseFloat(loc.lat),parseFloat(loc.long));
      dispatch(getNearby(parseFloat(loc.lat),parseFloat(loc.long)))

    } else {
       console.log( "Geolocation is not supported by this browser.");
    }
 }
 function showPosition(position) {
    setLoc({lat: position.coords.latitude, long: position.coords.longitude});
 }
  const dispatch = useDispatch();
  const nearby = useSelector((state)=>state.LayoutReducer).nearby;

  useEffect(()=>{
    console.log("here");
    getLocation()
    console.log(parseFloat(loc.lat),parseFloat(loc.long))
    dispatch(getNearby(parseFloat(loc.lat),parseFloat(loc.long)))
  },[navigator. geolocation])

  useEffect(()=>{
    dispatch(allQueues())
  },[])

  return (
    <>
        <Navbar/>
        <SearchBar/>
        
        <h1 className={styles.mainHead}>Nearby Stores</h1>
        <div className={styles.cards}>
            {nearby.length===0?<button onClick={getLocation}>Show Nearby</button>:""}
            {nearby.length!==0?nearby.map(n=>{
              return <Card n={n.shop}/>
            }):<></>}
        </div>
        <br/>
        <br/>
        <h1 className={styles.mainHead}>Queues Joined</h1>
        <br/>
        <div>
            <ListElement/>
            <ListElement/>
            <ListElement/>
            <ListElement/>
        </div>

    </>
  )
}

export default HomePage