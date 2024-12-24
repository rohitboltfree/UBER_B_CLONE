const express  = require('express');
const router = express.Router();
const {body} = require('express-validator');
const { routes } = require('../app');
const captainController = require('../controlers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),

    body('fullname.firstname').isLength({min:3}).withMessage('First name must be atleast 3 characters long'),

    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long'),

    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be atleast 3 characters long'),

    body('vehicle.capacity').isLength({min:1}).withMessage('Capacity must be minimum 1 for one passenger'),

    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle type')


],
    captainController.registerCaptain
)

router.post('/login', [
   body('email').isEmail().withMessage('Invalid Email'),
   body('password').isLength({min:6}).withMessage('Password must br atleast 6 characters')
],
    captainController.loginCaptain
) 

router.get('/profile',authMiddleware.authCaptain,
    captainController.getCaptainProfile
)

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)

module.exports = router;