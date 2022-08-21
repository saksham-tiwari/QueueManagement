import React, { useEffect, useState } from 'react'
import styles from "./Homepage.module.css"
import TimerIcon from '@mui/icons-material/Timer';
import { useDispatch, useSelector } from 'react-redux';
import { allQueues, getNearby, getSingle } from '../../../redux/actions/LayoutAction';
import axios from 'axios';
import Url from '../../../services/BaseUrl';
import { useNavigate } from 'react-router-dom';
import { setLoader, UnsetLoader } from '../../../redux/actions/LoaderActions';

const ListElement = (props) => {
  let dispatch = useDispatch()
  let navigate = useNavigate()

  const [store,setStore] = useState({_id:'0',timeleft:'0'})
  const [style,setStyle] = useState(false)
  const [loc,setLoc]= useState({
    lat: 0,
    long: 0
 });

  useEffect(()=>{
    dispatch(getSingle(props.x._id))
    .then((res)=>{
      console.log(res);
      setStore(res.data)
    })
  },[])
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

  const leave = ()=>{
    dispatch(setLoader())
    var today = new Date();
    var time = parseInt(parseInt(today.getHours())*60 + parseInt(today.getMinutes()));
    let userid = localStorage.getItem("userid")

    let data = {
      shopid:props.x._id,
      time,
      counter:props.x.counter+1,
      userid
  }
    console.log(data);


    axios
    .post(Url+"store/removeuser",data)
    .then((res)=>{
        console.log(res);
        setStyle(true)
        getLocation()
        dispatch(UnsetLoader())
        // dispatch(allQueues())
        // .then((res)=>{
        //   console.log(res)
        //   props.setState(res)
        // })
        navigate("/")
    })
    .catch((err)=>{
        console.log(err);
    })}
  
  return (
    <div className={styles.listElement} style={style?{display:"none"}:{}}>
        <h1 className={styles.head} style={{textAlign:"left", display:"inline"}}>{store._id!=='0'?store.name:"Name"}</h1>
        <span style={{fontSize:"14px", marginLeft:"4px"}}>
            {/* {store.Address} */}
            {store._id!=='0'?((store.Address.length>20)?store.Address.substring(0,20)+"...":store.Address):"Address"}
        </span>
        {/* <span style={{marginLeft:"180px"}}>
          <TimerIcon fontSize='medium' style={{position:"relative",top:"6px", color:"#192839"}}/> 
          <span className={styles.yellowCapsule2}>
            1hr 25min 03sec
          </span>
        </span> */}
        <button className={styles.leaveBtn} onClick={leave}>
            Leave Queue
        </button>
        <span style={{float:"right", marginRight:"20px"}}>Counter Alloted:{props.x.counter+1}</span>

    </div>
  )
}

export default ListElement