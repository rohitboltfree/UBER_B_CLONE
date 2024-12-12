const express  = require('express');
const router = express.Router();
const { body }  = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');
const userController = require('../controlers/user.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be atleast 3 characters long '),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long ')
],
    userController.registerUser
)

// login routes 
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 character ')
],
    userController.loginUser
)

// can we directly use like this 
router.get('/profile',authMiddleware.authUser, userController.getUserProfile)

//black list the token and then check the if it is black lsit or not 



module.exports = router;