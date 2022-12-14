const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const incidentSchema = new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    timeOfIncident:{
        type:String,
        default:''
    },
    title:{
        type:String,
        required:true
    },
    long:{
        type:Number,
        required:true
    },
    lat:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        default:'',
    },
    image:{
        imgId:{
            type:String,
            default:'No Image'
        },
        imgLink:{
            type:String,
            default:'No Image'
        }
    },
    description:{
        type:String,
        default:''
    },
},{
    timestamps:true
});


module.exports = mongoose.model('Incident',incidentSchema);