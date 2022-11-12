const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    lastName:{
        type:String,
        default:''
    },
    firstName:{
        type:String,
        default:''
    },
    password:{
        type:String,
        default:''
    }
},{
    timestamps:true
});


module.exports = mongoose.model('User',userSchema);