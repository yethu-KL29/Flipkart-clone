import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useContext } from 'react'
import "./Header.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../Login/LoginDialog';
import { DataContext } from '../Context/DataProvider';
import Profile from './Profile';
const CustomButton = () => {
  const [open, setopen] = useState(false)
  const {user} = useContext(DataContext)

  const openDialog = () => {
    setopen(true)
  }

  return (
    <div className='button'>
      {user ? <Profile/>: 
      <Button onClick={openDialog} variant='contained'
            sx={{marginLeft:"3vw",
            width:'7vw', 
            fontWeight:'700',
            height:"30px",
            backgroundColor:"white", 
            color:"#027cd5"}}
        >Login</Button>
  }
        
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

export default CustomButton;
