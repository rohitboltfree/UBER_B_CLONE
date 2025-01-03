const axios = require('axios');

const getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const apiKey = 'AlzaSyivzkSLbKimfWKWynv2Omq886cP3nAIL3x';
    const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        console.log("Request URL:", url);
        const response = await axios.get(url);
        console.log("API Response Status:", response.status);
        console.log("API Response Data:", response.data);

        if (response.data.status === 'OK' && response.data.rows.length > 0) {
            const element = response.data.rows[0].elements[0];
            if (element.status === 'OK') {
                return {
                    distance: element.distance.text,
                    duration: element.duration.text
                };
            } else {
                throw new Error('Unable to fetch distance and duration');
            }
        } else {
            console.warn("No results found for the given origin and destination");
            return null;
        }
    } catch (error) {
        console.error("Error fetching distance and duration: ", error.message);
        throw new Error("An error occurred while fetching distance and duration");
    }
};

module.exports = {
    getDistanceTime
};




// const axios = require('axios');

// module.exports.getAddressCoordinate = async (address) => {
    
//     const apiKey = process.env.GOOGLE_MAPS_API ||"AlzaSyivzkSLbKimfWKWynv2Omq886cP3nAIL3x";
//     const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

//     try {
         
//         const response = await axios.get(url);
         
//         if(response.data.status === "OK" && response.data.results.length > 0){
//             const location = response.data.results[0].geometry.location;
           
//             return{
//                 ltd:location.lat,
//                 lng:location.lng
//             };
//         } else {
//             throw new Error('Unable to fetch coordinates');
//         }
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }

// module.exports.getDistanceTime = async (origin, destination) => {
    
//     if(!origin || !destination ){
//         throw new Error('Origin and destination are required');
//     }

//     const apiKey = process.env.GOOGLE_MAPS_API ||"AlzaSyivzkSLbKimfWKWynv2Omq886cP3nAIL3x";

//     const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&key=${apiKey}`;

//     try {
//         console.log("Request URL:", url);
//          const response = await axios.get(url);
//           console.log("API Response Status:", response.status);
//            console.log("API Response Data:", response.data.status);


//         if(response.data.status === "OK"){

//             if(response.data.rows[0].elements[0].status === 'ZERO_RESULT'){
//                 throw new Error('No routes found');
//             }
            
//             return response.data.rows[0].elements[0] ;
//         } else {
//             throw new Error('Unable to fetch distanse and time ');
//         }

//     } catch (err) {
//         console.error(err);
//         throw err ;
//     }

// }