const mongoose = require('mongoose');

const participantschema = mongoose.Schema({
participantname:{type:String,required:true , trim:true},
age:{type:Number,required:true , trim:true},
gender:{type:String,required:true , trim:true},
tournamentid:{type:String,required:true, trim:true}

});

const participantModel = mongoose.model("participant",participantschema);

module.exports =  participantModel;