const express  = require('express');
const router = express.Router();
const { body }  = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');
const userController = require('../controlers/user.controller');
const userModel = require('../models/user.model');

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

router.post('/refresh-token', authMiddleware.authUser, async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const token = userModel.schema.methods.generateAuthToken(); // Assuming generateAuthToken is a method in your user model
        res.cookie("token",token,{
            httpOnly: true
        })
        res.status(200).json({ token, user });
    } catch (error) {
        console.error('Error refreshing token:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


// can we directly use like this 
router.get('/profile',authMiddleware.authUser, userController.getUserProfile)

//black list the token and then check the if it is black lsit or not 
router.get('/logout',authMiddleware.authUser,userController.logoutUser)


module.exports = router;