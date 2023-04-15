import React from 'react'
import { Button, Typography } from '@mui/material'
import { useContext } from 'react'
import { DataContext } from '../Context/DataProvider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Profile = () => {
    const { user,setUser } = useContext(DataContext)
    const [open, setopen] = useState(false)

    const handleClose = () => {
        setUser('')
        setopen(false)
    };

    const handleClick = (event) => {
        setopen(event.currentTarget);
    };
  

    return (
        <div>
            <Button onClick={handleClick} sx={{ color: "white" }}>{user}</Button>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >

                <MenuItem onClick={handleClose} >
                    <PowerSettingsNewIcon sx={{color:"blue"}} />
                     Logout
                </MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    )
}

export default Profile
