const express = require('express');
const userRouter = express.Router();

const { userSignup } = require('../controller/userController');
const { login } = require('../controller/userController');


userRouter.post('/signup',userSignup);
userRouter.post('/login',login);

module.exports = userRouter;