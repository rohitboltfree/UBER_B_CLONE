const mongoose= require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3, 'Fristname must br atleast 3 charaters long'],
        },
        lastname:{
            type:String,
            minlength:[3, 'Fristname must br atleast 3 charaters long'],
        },
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match:[/^|S+@\S+\.\S+$/,'Please enter a valid email']
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    },
    //we have to add field for if rider is avaliable or not 
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },
    //add type of vehicle 
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'Color must be at least 3 characters long'],
        },
        plate:{
            type:String,
            required:true,
            minlength:[3, 'Plate must be atleast 3 characters long'],
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'Capacity must be at least 1'],
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle'],
        }
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        }
    }
})


// we create a method to generate token
captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET, {expiresIn:'24h'})
    return token;
};

captainSchema.methods.comparePassword = async (password) => {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('caption',captainSchema);

module.exports = captainModel;