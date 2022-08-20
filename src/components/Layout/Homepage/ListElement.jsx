import React from 'react'
import styles from "./Homepage.module.css"
import TimerIcon from '@mui/icons-material/Timer';

const ListElement = () => {
  return (
    <div className={styles.listElement}>
        <h1 className={styles.head} style={{textAlign:"left", display:"inline"}}>Store Name </h1>
        <span style={{fontSize:"14px", marginLeft:"4px"}}>
            Address of the store here...
        </span>
        <span style={{marginLeft:"180px"}}>
          <TimerIcon fontSize='medium' style={{position:"relative",top:"6px", color:"#192839"}}/> 
          <span className={styles.yellowCapsule2}>
            1hr 25min 03sec
          </span>
        </span>
        <button className={styles.leaveBtn}>
            Leave Queue
        </button>
    </div>
  )
}

export default ListElement