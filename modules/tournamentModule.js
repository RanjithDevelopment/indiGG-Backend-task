const tournamentModel = require("../Models/tournaamentmodel.js");

module.exports.getData = async (req,res,next)=>{
    try {
        
        const getinfo = await tournamentModel.find({});
        return  res.status(200).send(getinfo);
    } catch (error) {
        return error 
        
    }

}

module.exports.editData = async(req,res,next) =>{
    let id = req.params.id;
   
try {
    let editinfo = await  tournamentModel.updateOne({ _id: id },{
        gamename:req.body.gamename,
        startdate:req.body.startdate,
        enddate:req.body.enddate,
        gameStatus:req.body.gamestatus
    })
   
    if (!editinfo) {
        return res.status(500).json({ message: "Unable To Update The Blog" });
      }
    
    return  res.status(200).send(editinfo);

} catch (error) {
    return error 
}

}

module.exports.createData = async(req,res,next)=>{
   
   
    try {
        
        const createData = await new tournamentModel({
            gamename:req.body.gamename,
            startdate:req.body.startdate,
            enddate:req.body.enddate,
            gameStatus:req.body.gamestatus
        });
        await createData.save();
        return  res.status(200).send(createData);
        
    } catch (error) {
        return error
    }
}

module.exports.deleteData = async(req,res,next)=>{
try {

    const deletedata = await  tournamentModel.deleteOne({ _id: req.params.id });
    res.status(200).send(deletedata);
    
} catch (error) {
    return error
}
}