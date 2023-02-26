import { Button, Dialog, TextField,styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Component=styled(Box)`
height: 70vh;
width:90vh;
`;

const Image=styled(Box)
`background: #2874f0 url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png") no-repeat center center;
 height: 100%;
 width:30%;`


const LoginDialog = ({open,setopen}) => {
  const handleClose = () => {
    setopen(false)
  }
  return (
  
      <Dialog open={open} onClose={handleClose} >
        <Component>
          <Box sx={{display:"flex",height:"100%"}}>
              <Image></Image>
              <Box sx={{width:"90vw"}}>
                <TextField label="Enter Email/Mobile Number" variant="standard" />
                <TextField label="Enter Password" variant="standard" />
                <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                <Button>Login</Button>
                <Typography>OR</Typography>
                <Button>Request OTP</Button>
                <Typography>New to Flipkart? Create an account</Typography>

              </Box>
            </Box>
        </Component>

      </Dialog>
    
  )
}

export default LoginDialog