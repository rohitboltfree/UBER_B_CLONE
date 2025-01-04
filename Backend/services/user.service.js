const userModel = require('../models/user.model');

// for to create user we to set the required field from the schema 
module.exports.createUser = async ({
    //accept these as a object 
        firstname,lastname,email,password
}) =>{
    if(!firstname || !email || !password){
        throw new Error('All field are required');
    }
    const user = userModel.create({
        fullName:{
            firstname,
            lastname
        },
        email,
        password
    });

    

    return user;
}