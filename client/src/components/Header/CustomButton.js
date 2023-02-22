import { Button, Tabs ,Tab, IconButton, Typography} from '@mui/material'
import React from 'react'
import "./Header.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/system';
const CustomButton = () => {
  return (
    <div className='button'>

      <Button variant='contained'
        sx={{marginLeft:"3vw",
            width:'7vw', 
            fontWeight:'700',
            height:"30px",
            backgroundColor:"white", 
            color:"#027cd5"}}
        >Login</Button>
        <div className='options'>
          <Typography >Become a Seller</Typography>
          <Typography>More</Typography>
          <div className='cart'>
            <ShoppingCartIcon sx={{color:"white"}}/>
            <Typography>Cart</Typography>
          </div>
        </div>
    </div>
  )
}

export default CustomButton