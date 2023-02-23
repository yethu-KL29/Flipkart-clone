import { styled,Box } from '@mui/material';

import React from 'react'
import { navData } from "../../constants/data"

const Compo= styled(Box)
    `display: flex;
    justify-content: center;
    gap:2%;
    margin-left: 3% ;
    `


const Navbar = () => {
   
  return (
   <Compo>
        {navData.map(data=>(
            <Box sx={{padding:"12px ",fontWeight:"500"}}>
                <img src={data.url} alt={data.text} style={{width:64}}/>
                <span>{data.text}</span>
            </Box>
        ))
        }
   </Compo>
  )
}

export default Navbar