import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import { Box } from '@mui/system'
import { styled } from '@mui/material'

const Ban=styled(Box)({
   padding:"30px",
    backgroundColor:"#EAEAEA"
})
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Ban>
        <Banner/>
      </Ban>
    </div>
  )
}

export default Home