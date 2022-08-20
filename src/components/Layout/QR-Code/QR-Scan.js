import React from 'react'
import { QRCodeSVG } from 'qrcode.react';
import Navbar from '../Navbar/Navbar';
import image from '../../Assets/pic.svg'
import './QR-Scan.css'
const QrScanner = () => {
  return (
    <>
      <div className="Qrcode-Page">
        <div className='Navbar-Signup'>
          <Navbar />
        </div>
        <div className="qrcode">
          <QRCodeSVG value="http://localhost:3000/" />
        </div>
        <div className='queue-img'>
          <img className="pic" src={image} alt="logo" />
        </div>
      </div>
    </>
  )
}

export default QrScanner