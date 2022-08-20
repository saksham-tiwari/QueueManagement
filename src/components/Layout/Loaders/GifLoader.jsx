import GifLoader from 'react-gif-loader';
import React from 'react'
import gif from "../../Assets/q3.gif"

const Loader = () => {
  return (
    <GifLoader
        loading={true}
        imageSrc={gif}
        imageStyle={{width:"20%", marginTop:"20%"}}
        overlayBackground="rgba(0,0,0,0.5)"
    />
  )
}

export default Loader