const mongoose = require('mongoose');


const tournamentSchema = mongoose.Schema({
    gamename:{type:String,required:true , trim:true},
    startdate:{type:String , required:true , trim:true},
    enddate:{type:String , required:true , trim:true},
    gameStatus:{type:String , required:true , trim:true}
})

const tournamentModel = mongoose.model("tournament",tournamentSchema);

module.exports = tournamentModel;