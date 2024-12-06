const userModel = require('../models/user.model');
const userService = require('../services/user.service');
//we have to check the validation with the help of express-validator
const { validationResult } = require('express-validator');

//in this we write the logic to create the user 
module.exports.registerUser = async (req, res, next) => {

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