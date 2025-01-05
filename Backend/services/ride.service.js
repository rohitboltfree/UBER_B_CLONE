
const rideModel = require('../models/ride.model');
const mapService = require('./maps.service');
const crypto = require('crypto');

// Export the getFare function
const getFare = async (pickup, destination) => {
    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }

    console.log(pickup, destination);
    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    if (!distanceTime || !distanceTime.distanceValue || !distanceTime.durationValue) {
        throw new Error('Unable to calculate fare due to missing distance or duration information');
    }

    console.log('Distance (m):', distanceTime.distance.value);
    console.log('Duration (s):', distanceTime.duration.value);
    console.log('DISTANCE TIME===========>:', distanceTime);

    const baseFare = {
        auto: 30,
        car: 50,
        moto: 20
    };
    const perkmRate = {
        auto: 10,
        car: 15,
        moto: 8
    };
    const perMinuteRate = {
        auto: 2,
        car: 3,
        moto: 1.5
    };

    const distanceKm = distanceTime.distanceValue / 1000;
    const durationMin = distanceTime.durationValue / 60;
    

    const fare = {
        auto: Math.round(baseFare.auto + (distanceKm * perkmRate.auto) + (durationMin * perMinuteRate.auto)),
        car: Math.round(baseFare.car + (distanceKm * perkmRate.car) + (durationMin * perMinuteRate.car)),
        moto: Math.round(baseFare.moto + (distanceKm * perkmRate.moto) + (durationMin * perMinuteRate.moto)),
    };

    console.log('Calculated', fare);

    return fare;
};

const getOtp = (num) => {
    const generateOtp = (num) => {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    };
    return generateOtp(num);
};

const createRide = async ({ user, pickup, destination, vehicleType }) => {
    console.log("d--------------");
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('All fields are required');
    }
    try {
        const fare = await getFare(pickup, destination);
        console.log('FARE=============>', fare);
        const ride = await rideModel.create({
            user, pickup, destination,
            otp: getOtp(6),
            fare: fare[vehicleType]
        });
        console.log('user inside srvice', user );
        console.log('ride inside service ', ride);
        return ride;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

// Export the createRide function along with getFare
module.exports = {
    getFare,
    createRide
};


// const rideModel = require('../models/ride.model');
// const mapService = require('./maps.service');
// // const bcrypt = require('bcrypt');
// const crypto = require('crypto');


//   module.exports.getFare = async (pickup,destination) => {
        
//     if(!pickup || !destination){
//         throw new Error('Pickup and destination are required');
//     }

//     console.log(pickup,destination)
//     const distanceTime = await mapService.getDistanceTime(pickup,destination);

//     if (!distanceTime || !distanceTime.distance || !distanceTime.duration) { throw new Error('Unable to calculate fare due to missing distance or duration information'); }


//     console.log('Distance (m):', distanceTime.distance.value);
//      console.log('Duration (s):', distanceTime.duration.value);
//      console.log('DISTANCE TIME===========>:', distanceTime);
     


//     const baseFare = {
//         auto:30,
//         car:50,
//         moto:20
//     };
//     const perkmRate = {
//         auto:10,
//         car:15,
//         moto:8
//     };
//     const perMinuteRate = {
//         auto:2,
//         car:3,
//         moto:1.5
//     };


//     const distanceKm = distanceTime.distanceValue / 1000; 
//     const durationMin = distanceTime.durationValue / 60;

//     const fare ={
//         auto : Math.round(baseFare.auto + ( distanceKm * perkmRate.auto) + ( durationMin  * perMinuteRate.auto) ), 
//         car : Math.round(baseFare.car + (distanceKm  * perkmRate.car) + ( durationMin  * perMinuteRate.car) ), 
//         moto :  Math.round(baseFare.moto + (distanceKm  * perkmRate.moto) +  (durationMin   * perMinuteRate.moto) ), 
//     };

//     console.log('Calculated', fare);

//     return fare;
// }
// // module.exports.getFare = getFare;

// function getOtp(num){
//     function generateOtp(num){
//         const otp = crypto.randomInt(Math.pow(10, num-1), Math.pow(10,num)).toString();
//         return otp;
//     }
//     return generateOtp(num);
// }


// module.exports.createRide = async ({
//       user, pickup, destination, vehicleType
// }) => {
//     console.log("d--------------")
//     if(!user || !pickup || !destination || !vehicleType){
//         throw new Error('All fields are required');
//     }
//     try {
//         const fare = await getFare(pickup,destination);
//     console.log('FARE=============>',fare)
//     const ride = rideModel.create({
//         user,pickup,destination,
//         otp:getOtp(6),
//         fare:fare[vehicleType]
//     })
//     return ride;

//     } catch (error) {
//         console.log(error)
        
//     }
// }