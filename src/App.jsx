import React from 'react'
import FirstHomework from './pages/FirstHomework.jsx'
import SecondHomework from './pages/SecondHomework.jsx'
import ThirdHomework from './pages/ThirdHomework.jsx'
import { Route, Routes } from 'react-router-dom'
import Header from './component/Header.jsx'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<FirstHomework />} />
        <Route path='/secondHomewok' element={<SecondHomework />} />
        <Route path='/thirdHomework' element={<ThirdHomework />} />
      </Routes>
    </div>
  )
}

export default App