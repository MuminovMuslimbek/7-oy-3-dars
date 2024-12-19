import React, { useEffect, useState } from 'react'
import Bg from '../assets/bg.jpg'

function FirstHomework() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000)
  }, [])

  return (
    <div className='h-[90.3vh] select-none w-full flex items-center justify-center' style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <p className='text-white text-[40px] w-full text-center backdrop-blur-[7px]'>{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default FirstHomework;