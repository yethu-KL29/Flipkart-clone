import { Button, Dialog, TextField,styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Component=styled(Box)`
height: 60vh;
width:35vw;
`;
const Content=styled(Box)`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 60%;
padding: 50px 30px;
`;

const Image=styled(Box)
`background: #2874f0 url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png") no-repeat center 85%;
 height: 100%;
 width:40%;`;

 const Wrapper=styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 10px;

 `;
const LoginButton=styled(Button)`
background-color: #fb641b;
color: #fff;
text-transform: none;
height: 48px;
border-radius: 2px;
margin-top: 20px;
width: 75%;
align-self: center;
margin-bottom: 10px;
`;
const RequestButton=styled(Button)`
background-color: #fff;
color: #2874f0;
box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
text-transform: none;
height: 48px;
border-radius: 2px;
margin-top: 20px;
width: 75%;
align-self: center;
margin-bottom: 10px;`;


const Writeup=styled(Typography)`
margin-top: 20px;
margin-bottom: 20px;
align-self: center;
color:blue;
cursor: pointer;
`;
const LoginDialog = ({open,setopen}) => {
  const handleClose = () => {
    setopen(false)
  }
  return (
  
      <Dialog open={open} onClose={handleClose}PaperProps={{sx:{maxWidth:"unset"}}} >
        <Component>
          <Box sx={{display:"flex",height:"100%"}}>
              <Image>
                <Wrapper>
                  <Typography variant="h4" sx={{color:"black"}}>Login</Typography>
                  <Typography variant="h7" sx={{color:"black"}}>Get access to your Orders, Wishlist and Recommendations</Typography>
                </Wrapper>
              </Image>
              <Content>
                <TextField label="Enter Email/Mobile Number" variant="standard" />
                <TextField label="Enter Password" variant="standard" />
                <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                <LoginButton >Login</LoginButton>
                <Typography sx={{textAlign:"center"}}>OR</Typography>
                <RequestButton>Request OTP</RequestButton>
                <Writeup>New to Flipkart? Create an account</Writeup>

              </Content>
            </Box>
        </Component>

      </Dialog>
    
  )
}

export default LoginDialog