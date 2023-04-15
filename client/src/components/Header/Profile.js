import React from 'react'
import { Button, Typography } from '@mui/material'
import { useContext } from 'react'
import { DataContext } from '../Context/DataProvider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const Profile = () => {
    const {user} = useContext(DataContext)
    const [open, setopen] = useState(false)

    const handleClose = () => {
        setopen(false)
    };
    
    const handleClick = (event) => {
        setopen(event.currentTarget);
    };

    return (
        <div>
            <Button onClick={handleClick} sx={{color:"white"}}>{user}</Button> 
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    )
}

export default Profile
