const userModel = require('../models/user.model');
const userService = require('../services/user.service');
//we have to check the validation with the help of express-validator
const { validationResult } = require('express-validator');


//in this we write the logic to create the user 
const registerUser = async (req, res, next) => {

    const errors = validationResult(req);
    //any thing is wrong in any field we give then we give the errors in this
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;
    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
}


const loginUser = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    
    // we have to extract the vaule of email and password from the frontend 
    const {email, password} = req.body;
    // check is user exsist or not if exsit extract the password from it we using for that (+passoword)
    const user = await userModel.findOne({email}).select(' +password');

    if(!user){
        // if any of the field are not correct then response with message
        return res.status(401).json({message: "Invalid email or password "});
    }

    // we fetch the comparePassword from the user model 
    console.log("password",password)
    const isMatch = await user.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password "});
    }
    
    //now we have to renerate token
    const token = userModel.schema.methods.generateAuthToken();

    //then send the response
    res.status(200).json({token,user});
}

module.exports = {
    registerUser,
    loginUser
}