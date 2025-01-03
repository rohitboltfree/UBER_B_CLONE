const rideService = require('../services/ride.service');
const { body, validationResult } = require('express-validator');


module.exports.createRide = async (req, res) => {
    console.log("create ride  ===============>")
    const errors = validationResult(req);
    console.log(errors)
    if(!errors.isEmpty()){
        return res.status(400).json({erros:errors.array()});
    }

    const { userId, pickup, destination, vehicleType } = req.body;
    console.log(destination,pickup)
    try {
        const ride = await rideService.createRide({ user: req.user._id,pickup,destination,vehicleType });
        return res.status(200).json(ride);
    } catch (err) {
        console.log(err)
        return res.status(400).json({message: err.message});
    }
};