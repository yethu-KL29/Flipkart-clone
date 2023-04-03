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

module.exports = {
  userSignup,
};

