const express = require('express');
const userRouter = express.Router();

const { userSignup } = require('../controller/userController');


userRouter.post('/signup',userSignup);

module.exports = userRouter;