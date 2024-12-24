const captainModel = require('../models/captain.modal');

module.exports.createCaptain = async ({firstname,lastname,email,password, color, plate, capacity, vehicleType}) => {
    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error('All field are required');
    }
    const captain = captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
            }
    })

    return captain;
}