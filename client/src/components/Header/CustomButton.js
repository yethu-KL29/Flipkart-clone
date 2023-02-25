import { Button, Tabs ,Tab, IconButton, Typography} from '@mui/material'
import React from 'react'
import "./Header.css"
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/system';
import LoginDialog from '../Login/LoginDialog';
const CustomButton = () => {

  const [open, setopen] = useState(false)
  const openDialog = () => {
    setopen(true)
  }

  return (
    <div className='button'>

      <Button onClick={openDialog} variant='contained'
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
        <LoginDialog open={open} setopen={setopen}/>
    </div>
  )
}

export default CustomButton