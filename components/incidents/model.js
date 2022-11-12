const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const incidentSchema = new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    
},{
    timestamps:true
});


module.exports = mongoose.model('Incident',incidentSchema);