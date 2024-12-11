const express  = require('express');
const router = express.Router();
const { body }  = require('express-validator');
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


module.exports = router;