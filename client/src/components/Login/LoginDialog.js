import { Button, Dialog, TextField, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import { authSignup } from '../../service/api'
import { authLogin } from '../../service/api'
import { useContext } from 'react'
import { DataContext } from '../Context/DataProvider';

const Component = styled(Box)`
  height: 60vh;
  width: 35vw;
`;

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  padding: 50px 30px;
`;

const Image = styled(Box)`
  background: #2874f0 url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png") no-repeat center 85%;
  height: 100%;
  width: 50%;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 20px;
`;

const LoginButton = styled(Button)`
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

const RequestButton = styled(Button)`
  background-color: #fff;
  color: #2874f0;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  text-transform: none;
  height: 48px;
  border-radius: 2px;
  margin-top: 20px;
  width: 75%;
  align-self: center;
  margin-bottom: 10px;
`;

const Writeup = styled(Typography)`
  margin-top: 20px;
  margin-bottom: 20px;
  align-self: center;
  color: blue;
  cursor: pointer;
`;

const values = {
  login: {
    view: "login",
    heading: "Login",
    subheading: "Get access to your Orders, Wishlist and Recommendations"
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subheading: "Sign up with your mobile number to get started"
  }
}

const LoginDialog = ({ open, setopen }) => {
  const [account, setaccount] = useState(values.login)
  const { setUser } = useContext(DataContext)
  const [error, seterror] = useState(false)
  const [login, setlogin] = useState({
    username: "",
    password: ""
  })
  const [signup, setsignup] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    password: ""
  })

  const handleClose = () => {
    setopen(false)
    setaccount(values.login)
  }

  const handleClick = () => {
    setaccount(values.signup)
  }

  const handleChange = (e) => {
    setsignup({
      ...signup,
      [e.target.name]: e.target.value
    })
    console.log(signup)
  }
  const loginChange = (e) => {
    setlogin({
      ...login,
      [e.target.name]: e.target.value
    })
    console.log(login)
  }

  const signupUser = async () => {
    console.log("click");
    let response = await authSignup(signup) // Add await here to wait for the response
    if (!response) return;
    handleClose();
    setUser(signup.firstname);
  };

  const loginClick = async () => {
    console.log("click");
    let response = await authLogin(login,seterror) // Add await here to wait for the response
    if (response.status==200) {
      handleClose();
      setUser(login.username);
    }
   

  };

  return (
  
      <Dialog open={open} onClose={handleClose}PaperProps={{sx:{maxWidth:"unset"}}} >
        <Component>
          <Box sx={{display:"flex",height:"100%"}}>
              <Image>
                <Wrapper>
                  <Typography variant="h5" sx={{color:"black"}}>{account.heading}</Typography>
                  <Typography variant="h7" sx={{color:"black"}}>{account.subheading}</Typography>
                </Wrapper>
              </Image>
                {account.view==="login"?
              <Content>
                <TextField onChange={loginChange} name='username'  label="Enter Email/Mobile Number" variant="standard" />
                {error ?<Typography sx={{color:"red"}}>please enter valid username</Typography>:null}
                <TextField onChange={loginChange} name='password' label="Enter Password" variant="standard" />
                <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                <LoginButton onClick={loginClick} >Login</LoginButton>
                <Typography sx={{textAlign:"center"}}>OR</Typography>
                <RequestButton>Request OTP</RequestButton>
                <Writeup onClick={handleClick}>New to Flipkart? Create an account</Writeup>

              </Content>
              :
              <Content>
                <TextField onChange={handleChange} name="firstname" label="Enter Firstname" variant="standard" />
                <TextField onChange={handleChange} name="lastname"  label="Enter Lastname" variant="standard" />
                <TextField onChange={handleChange} name="username"  label="Enter Username" variant="standard" />
                <TextField onChange={handleChange} name="email"  label="Enter Email" variant="standard" />
                <TextField onChange={handleChange} name="phone"  label="Enter Mobile Number" variant="standard" />
                <TextField onChange={handleChange} name="password"  label="Enter Password" variant="standard" />
                {/* <TextField onChange={handleChange} name="confirmPassword" label="Enter Confirm Password" variant="standard" /> */}
                <LoginButton onClick={signupUser} variant="contained">Continue</LoginButton>
                </Content>
                }
            </Box>
        </Component>

      </Dialog>
    
  )
}

export default LoginDialog