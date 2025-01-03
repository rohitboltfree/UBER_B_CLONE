const mapService = require('../services/maps.service');
const { validationResult } = require('express-validator')

module.exports.getCoordinates = async (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { address } = req.query;

    try {
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(404).json({ message: 'Coordinates not found in map.service' });
    }
}



module.exports.getDistance = async (req, res, next) => {
    const { origin, destination } = req.query;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const distanceTime = await mapService.getDistanceTime(origin, destination);
        if (distanceTime) {
            res.status(200).json(distanceTime);
        } else {
            res.status(404).json({ message: 'Distance and duration not found' });
        }
    } catch (error) {
        console.error("Error in controller:", error.message);
        res.status(500).json({ message: 'An error occurred while fetching distance and duration.' });
    }
};

 



// module.exports.getDistanceTime = async (req, res, next) => {
//     const { origin, destination } = req.query;
//     try {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

        
//         const distanceTime = await mapService.getDistanceTime(origin, destination);
//         if (distanceTime) {
//             res.status(200).json(distanceTime);
//         } else {
//             res.status(404).json({ message: 'Distance and duration not found' });
//         }

//         // res.status(200).json(distanceTime);

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// }