const express  = require('express');
const router = express.Router();
const {body} = require('express-validator');
const rideController = require('../controlers/ride.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/create', 
    authMiddleware.authUser,
    // body('userId').isString().isLength({min:24, max:24 }).withMessage('Invalid user id'),
    body('pickup').isString().isLength({min:3}).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn(['auto', 'car','moto']).withMessage('Invalid vehicleType'),
    rideController.createRide,
)

router.get('/get-fare',
    authMiddleware.authUser,
    body('pickup').isString().isLength({min:3}).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination address'),
    rideController.getFare,
)

module.exports = router;