import React from 'react'
import { AppBar, Button, Toolbar } from '@mui/material'
import './Header.css'
import Search from './Search';
import CustomButton from './CustomButton';

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (

<AppBar sx={{height:"55px",backdroundColor:"#027cd5"}}>
    <Toolbar>
        <div className='Header'>
            <div className='Logo'>
                <div className='main-logo'>
                    <img src={logoURL} alt='logo' />
                </div>
                <div className='sub-logo'>
                    <explore>Explore</explore>
                    <span>
                        <plus>Plus</plus>
                        <img src={subURL} alt='logo' />
                    </span>
                </div>
            </div>
            
            <Search/>
            <CustomButton/>
            
        </div>
    </Toolbar>
</AppBar>
        
            )
}

export default Header