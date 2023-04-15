const User = require("../model/userSchema");


const userSignup = async (req, res) => {
  const { firstname,lastname,username,email,password,phone } = req.body;
  let user;
  try {
    user = new User({
      firstname,
      lastname,
      username,
      email,
      password,
      phone
    });
    await user.save();
    res.status(200).json({
      message: user,
    });
    
  } catch (error) {
    
  }
}
const login=async(req,res,next)=>{
  const{username,password}=req.body;
  let existingUser;
  try {
       existingUser=await User.findOne({username})
  } catch (error) {
     
      console.log(error)
  }
  if(!existingUser){
  return res.status(404).json({message:"user not found"})
  }
  if(password===existingUser.password){
      return res.status(200).json({message:"successfully loggedin",user:existingUser} )
  }
  return res.status(404).json({message:"passwors is incorrect"})
}




module.exports = {
  userSignup,
  login
};

