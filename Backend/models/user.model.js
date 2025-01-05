const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullName: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be atlest 3 characters ']
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be atlest 3 characters ']
        },
    },
    email: {
        type: String,
        required: true,
        minlength: [5, 'Email must be at least 5 characters']
    },
    password: {
        type: String,
        required: true,
        //we user find donot send password
        select:false,
    },
    socketId: {
        type: String,
    },
})

// we create a method to generate token
userSchema.methods.generateAuthToken = function(){
    console.log( "use model this ===================> ", this,this._id)
    
    const token = jwt.sign({_id:this._id,email:this.email},process.env.JWT_SECRET,{
       expiresIn:'24h' 
    });

    return token;
}
//to compare with the password 
userSchema.methods.comparePassword = async function (password) {
    console.log( "p++++++++++",password,"this=========",this)
        return await bcrypt.compare(password, this.password);
}

//
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
