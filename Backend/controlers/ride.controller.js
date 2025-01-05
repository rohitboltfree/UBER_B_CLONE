const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');


module.exports.createRide = async (req, res) => {
    console.log("create ride  ===============>")
    const errors = validationResult(req);
    console.log(errors)
    if(!errors.isEmpty()){
        return res.status(400).json({erros:errors.array()});
    }

    const { userId, pickup, destination, vehicleType } = req.body;
    console.log("rooooooooooooooo======>",destination,pickup)
    try {

        // there is an error here we cannot access the user._id because of that we cannot access the user login api token to run create ride we have too use register api 
        const ride = await rideService.createRide({ user: req.user._id,pickup,destination,vehicleType });
        return res.status(200).json(ride);
    } catch (err) {
        console.log(err)
        return res.status(400).json({message: err.message});
    }
};

module.exports.getFare = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const { pickup,destination } = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination);
        return res.status(200).json( fare );
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}