import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import counter from "../../Assets/img1.png"
import styles from "./view.module.css"
import Counters from './Counters'
import { useDispatch } from 'react-redux'
import { checkStore } from '../../../redux/actions/LayoutAction'

const ViewQueue = () => {
    const [storeDetails,setStoreDetails] = useState({
        counter: 0,
        ShopCounter:[],
        queue: [],
    })

    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(checkStore())
        .then((res)=>{
            console.log(storeDetails.name)
            console.log(res.data);
            setStoreDetails(res.data)
            console.log(storeDetails);
        })
        .catch((err)=>{
            console.log(err.status)
            setStoreDetails([])
        })
    },[])
  return (
    <>
    <Navbar/>
    <h1>Queue at your store!</h1>
    <h2>Total no. of counters: {storeDetails.counter}</h2>
    <h3>Total customers: {storeDetails.queue.length}</h3>
    <h2>Counters:</h2>
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