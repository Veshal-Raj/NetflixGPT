import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-20 absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-2/4'>{overview}</p>
        <div>
            <button className='bg-white text-black p-3 px-12 text-xl  rounded hover:bg-opacity-80'>Play</button>
            <button className='m-2 bg-gray-500 text-white p-3 px-12 text-xl bg-opacity-50 hover:bg-opacity-70 rounded'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle