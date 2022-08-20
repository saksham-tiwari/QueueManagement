import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Error404 = () => {
    let navigate = useNavigate()
    // useEffect(()=>{
    //     setTimeout((
    //     ),10000)
    // },[])
    setTimeout(()=>{
        navigate("/")
    },10000)
  return (
    <>
        <Navbar/>
        <h1>Page Not Found! Redirecting to home in few seconds!</h1>
    </>
  )
}

export default Error404