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

    const hashedPassword = await captainModel.hashedPassword(password);
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

module.exports = {
    registerCaptain
}