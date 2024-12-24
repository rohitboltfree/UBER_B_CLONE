const blacklistTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.modal');
const captainService = require('../services/captain.service');
const {validationResult} = require('express-validator');

const registerCaptain = async (req, res, next) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    } 

    const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({email});

    if(isCaptainAlreadyExist){
        return res.status(400).json({message:'Captain already exist'});
    }

    // const hashedPassword = await captainModel.hashedPassword(password);

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.generateAuthToken();

    res.status(200).json({token, captain});
}

const loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;
    console.log("==>", email,password)
    const captain = await captainModel.findOne({email}).select('+password');
    
    console.log("password",password)
    const isMatch = await captain.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message: 'Invalid email or password'});
    }

    const token = captainModel.schema.methods.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({token, captain});
}

const getCaptainProfile = async (req,res,next) => {
    res.status(200).json({captain : req.captain});
    //({req.captain})
}

const logoutCaptain = async (req, res, next) => {

    res.clearCookie('token');

    const token = req.cookies?.token || req.headers.authorization?.split('')[1];
    await blacklistTokenModel.create({token});

    res.status(200).json({message: 'Logout successfully'});
}

module.exports = {
    registerCaptain,
    loginCaptain,
    getCaptainProfile,
    logoutCaptain
}