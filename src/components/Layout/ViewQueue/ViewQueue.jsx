import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import counter from "../../Assets/img1.png"
import styles from "./view.module.css"
import Counters from './Counters'
import { useDispatch } from 'react-redux'
import { checkStore } from '../../../redux/actions/LayoutAction'
import { setLoader, UnsetLoader } from '../../../redux/actions/LoaderActions'

const ViewQueue = () => {
    const [storeDetails,setStoreDetails] = useState({
        counter: 0,
        ShopCounter:[],
        queue: [],
    })

    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setLoader())
        dispatch(checkStore())
        .then((res)=>{
            console.log(storeDetails.name)
            console.log(res.data);
            setStoreDetails(res.data)
            console.log(storeDetails);
            dispatch(UnsetLoader())
        })
        .catch((err)=>{
            console.log(err.status)
            setStoreDetails([])
        })
    },[])
  return (
    <>
    <Navbar/>
    <div style={{marginLeft:"10%"}}>
    <h1>Queue at your store!</h1>
    <h2>Total no. of counters: {storeDetails.counter}</h2>
    <h3>Total customers: {storeDetails.queue.length}</h3>
    </div>
    <br/>
    <br/>
    <h2 style={{marginLeft:"10%"}}>Counters:</h2>
    <div className={styles.flexCounters}>
    {storeDetails.ShopCounter.map((x,i)=>{
        return <Counters i={i} storeDetails={storeDetails}/>
    })}
    {/* <Counters/>
    <Counters/>
    <Counters/>
    <Counters/> */}

    </div>
    
    
    </>
  )
}

export default ViewQueue