const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');

// const createRide = async (req, res) => {
//     console.log("create ride ===============>");
//     const errors = validationResult(req);
//     console.log(errors);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     const { user, pickup, destination, vehicleType } = req.body;
//     // console.log("rooooooooooooooo======>", destination, pickup); 
//     // console.log("============req user",req.user._id)
//     try {
//         // there is an error here we cannot access the user._id because of that we cannot access the user login api token to run create ride we have too use register api 
//         const ride = await rideService.createRide({ user: req.user._id, pickup, destination, vehicleType });
//         console.log('ride on ridecontroller', ride)
//         console.log("req.user  ", req.user)
//         console.log("req.user  ", req.user._id)
//         return res.status(200).json(ride);
//     } catch (err) {
//         console.log(err);
//         return res.status(400).json({ message: err.message });
//     }
// };

// const getFare = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         console.log("errors in getFare", errors);
//         return res.status(400).json({ errors: errors.array() });
//     }
//     const { pickup, destination } = req.query;

//     console.log('pickup, destination', pickup, destination);

//     try {
//         const fare = await rideService.getFare(pickup, destination);
//         return res.status(200).json(fare);
//     } catch (err) {
//         return res.status(500).json({ message: err.message });
//     }
// };

// module.exports = {
//     getFare,
//     createRide
// };





// const rideService = require('../services/ride.service');
// const { validationResult } = require('express-validator');


// const createRide = async (req, res) => {
//     console.log("create ride  ===============>")
//     const errors = validationResult(req);
//     console.log(errors)
//     if(!errors.isEmpty()){
//         return res.status(400).json({erros:errors.array()});
//     }

//     const { userId, pickup, destination, vehicleType } = req.body;
//     console.log("rooooooooooooooo======>",destination,pickup)
//     try {

//         // there is an error here we cannot access the user._id because of that we cannot access the user login api token to run create ride we have too use register api 
//         const ride = await rideService.createRide({ user: req.user._id,pickup,destination,vehicleType });
//         return res.status(200).json(ride);
//     } catch (err) {
//         console.log(err)
//         return res.status(400).json({message: err.message});
//     }
// };

// const getFare = async (req,res) => {
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){

//         console.log("errors in getfare ", errors)
        
//         return res.status(400).json({errors: errors.array()});
//     }
//     const { pickup,destination } = req.query;

//     console.log('pickup,destination', pickup,destination);

//     try {
//         const fare = await rideService.getFare(pickup, destination);
//         return res.status(200).json( fare );
//     } catch (err) {
//         return res.status(500).json({ message: err.message });
//     }
// }

// module.exports = {
//     getFare,
//     createRide
// }

const createRide = async (req, res) => {
    console.log("create ride ===============>");
    const errors = validationResult(req);
    console.log("Errors:", errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    console.log("User attached to request:", req.user);
    if (!req.user) {
        return res.status(401).json({ message: 'User authentication failed' });
    }

    const { pickup, destination, vehicleType } = req.body;
    try {
        const ride = await rideService.createRide({
            user: req.user._id, pickup, destination, vehicleType
        });
        console.log('Created ride:', ride);
        res.status(201).json(ride);
    } catch (err) {
        console.error("Error creating ride:", err);
        res.status(500).json({ message: err.message });
    }
};

const getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Errors in getFare:", errors);
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;
    try {
        const fare = await rideService.getFare(pickup, destination);
        res.status(200).json(fare);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getFare,
    createRide,
};
