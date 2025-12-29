import React from 'react'
import Navbar from '../components/Navbar'
import HomeMenu from '../components/HomeMenu'

const Home = () => {
  return (
    <div>
        <div className='bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-full z-1000'><Navbar /></div>
        <HomeMenu />
      Hello, Teammates!
    </div>
  )
}

export default Home
