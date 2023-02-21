import { InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import './Header.css'
const Search = () => {


  return (
    <div className='main'>
        <div className='search'>
            <InputBase placeholder='search for products,brands and more'  sx={{width:"100%",marginLeft:"3%"}}/>
            <SearchIcon sx={{color:"blue"}}/>
        
        </div>
        
    </div>
  )
}

export default Search