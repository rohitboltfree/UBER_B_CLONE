const userModel = require('../models/user.model');
// const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


// now we have to create token for the auth
const authUser = async (req, res, next) => {
    //we can find token on cookies and header
    //not able to find cookies
    const token = req.cookies?.token || req.headers.authorization?.split('')[ 1 ] ;
    console.log(req.headers)
    //now we have to decode the token 
    if(!token){

        return res.status(401).json({message:'Unauthorized'});
    }

    // is we have to use BlacklistToken insted of userModel
    const isBlacklisted = await userModel.findOne({token:token});

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

module.exports ={ authUser };

