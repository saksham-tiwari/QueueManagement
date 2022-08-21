import axios from 'axios'
import React from 'react'
import Url from '../../../services/BaseUrl'
import counter from "../../Assets/img1.png"
import styles from "./view.module.css"


const Counters = (props) => {
    const removeCustomer = async ()=>{
            var today = new Date();
            var time = parseInt(parseInt(today.getHours())*60 + parseInt(today.getMinutes()));
    
            return await axios
            .post(Url+"store/removeuser",{
                shopid:props.storeDetails._id,
                time,
                counter:props.i+1,
                userid:0
            })
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })
    }
  return (
    <div className={styles.counters}>
        <div className={styles.flexCounter}>
            
            <img src={counter} alt="count" className={styles.imgCounter}/> 
            <p className={styles.counterNo}>Counter no. {props.i+1}</p>

        </div>
        <p style={{textAlign:"center"}}>Current customers: {props.storeDetails.ShopCounter[props.i]}</p>
        
        <span className={styles.removeBtn} onClick={removeCustomer}>Remove</span>
    </div>
  )
}

export default Counters