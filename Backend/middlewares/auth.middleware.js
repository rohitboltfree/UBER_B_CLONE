const userModel = require('../models/user.model');
// const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.modal');


// now we have to create token for the auth
const authUser = async (req, res, next) => {
    //we can find token on cookies and header
    //not able to find cookies
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1] ;
    console.log("middleware===========",req.headers.authorization.split(' '))
    //now we have to decode the token 
    if(!token){

        return res.status(401).json({message:'Unauthorized'});
    }

    // is we have to use BlacklistToken insted of userModel
    // console("===>black------",isBlacklisted)
    const isBlacklisted = await blackListTokenModel.findOne({token:token});

    if(isBlacklisted){
        return res.status(401).json({message:'Unauthorization '});
    }

    // if we find the decoded part then access the catch
    try {
        // with this can find the id of user 
        console.log(token, process.env.JWT_SECRET)
        const decoded  = jwt.verify(token, process.env.JWT_SECRET);
        console.log('decoded : ', decoded);
        // with the help to user we can find the user
        const user = await userModel.findById(decoded._id);
        console.log('docoded._id -------------',decoded._id);

        //set the user
        req.user = user ;
        console.log('user attached to ------------req ------:', req.user);

        return next();

    } catch (error) {
        return res.status(401).json({message:'Unauthorized'});
    }

}

const authCaptain = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    console.log("Extracted Token:", token);

    if(!token){
        console.log("no token provided");
        return res.status(401).json({message: 'Unauthorized'});
    }
    const isBlacklisted = await blackListTokenModel.findOne({token : token });

    console.log("===>black------",isBlacklisted)
    if(isBlacklisted){
        return res.status(401).json({message: "Unauthorized"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)

        const captain = await captainModel.findById(decoded._id);
        
        req.captain = captain;
        return next();
    } catch (error) {
        res.status(401).json({message:'Unauthorized'});
    }
}

module.exports ={ authUser, authCaptain };


