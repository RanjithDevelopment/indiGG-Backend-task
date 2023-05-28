const mongoose = require("mongoose");

module.exports = {
    selectedDB : {},
    async connect(){
        try{
        let  connection = await mongoose.connect(process.env.MONGODB_URL);
        this.selectedDB =  connection ;
        console.log("Database connected successfully");

        }
        catch(error){
        console.log("DB error : " ,error );
        }
    }
}