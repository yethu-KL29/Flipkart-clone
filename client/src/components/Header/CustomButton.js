import { Button, Tabs ,Tab} from '@mui/material'
import React from 'react'
import "./Header.css"
const CustomButton = () => {
  return (
    <div className='button'>

      <Button variant='contained'
      sx={{marginLeft:"5vw",
          width:'7vw', 
          height:"30px",
          backgroundColor:"white",
          
          marginTop:"5px",
          color:"#027cd5"}}
      >Login</Button>
      <Tabs>
        <Tab label="Become a Seller"></Tab>
        <Tab label="More"></Tab>
        <Tab label="Cart"></Tab>
        
      </Tabs>
    </div>
  )
}

export default CustomButton