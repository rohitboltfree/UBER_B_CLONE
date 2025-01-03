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


module.exports.getAddressCoordinate = async (address) => {
    
    const apiKey = process.env.GOOGLE_MAPS_API ||"AlzaSyivzkSLbKimfWKWynv2Omq886cP3nAIL3x";
    const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
         
        const response = await axios.get(url);
         
        if(response.data.status === "OK" && response.data.results.length > 0){
            const location = response.data.results[0].geometry.location;
           
            return{
                ltd:location.lat,
                lng:location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}



const getPlaceSuggestions = async (input) => {
    if (!input) {
        throw new Error('Input is required');
    }

    const apiKey = 'AlzaSyivzkSLbKimfWKWynv2Omq886cP3nAIL3x';
    const url = `https://maps.gomaps.pro/maps/api/place/queryautocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        console.log("Request URL:", url);  // Log the request URL
        const response = await axios.get(url);
        console.log("API Response Status:", response.status);  // Log the response status
        console.log("API Response Data:", response.data);  // Log the response data

        if (response.data.status === 'OK') {
            return response.data.predictions;
        } else {
            console.warn("API response status:", response.data.status);
            console.warn("API response error message:", response.data.error_message); // Log error message if available
            return null;
        }
    } catch (error) {
        console.error("Error fetching place suggestions: ", error.message);
        throw new Error("An error occurred while fetching place suggestions");
    }
};


module.exports = {
    getDistanceTime,
    getPlaceSuggestions

};
