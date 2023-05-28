const participantModel = require('../Models/participantmodel');

module.exports.getparticipant = async (req, res, next) => {
    try {

        const getinfo = await participantModel.find({});
        return res.status(200).send(getinfo);
    } catch (error) {
        return error

    }

}

module.exports.editParticipant = async (req, res, next) => {
    let { participantname, age, gender, tournamentid } = req.body;
    let id = req.params.id;
    try {
        let editinfo = await participantModel.updateOne({ _id: id },{
            participantname, 
            age, 
            gender, 
            tournamentid
        })
       
        if (!editinfo) {
            return res.status(500).json({ message: "Unable To Update The Blog" });
          }
        
        return  res.status(200).send(editinfo);
        
    } catch (error) {
        return error
    }

}

module.exports.createParticipant = async (req, res, next) => {
   let {participantname,age,gender,tournamentid} = req.body
    try {
        const createData = await new participantModel({
            participantname,
            age,
            gender,
            tournamentid
        });
        await createData.save();
        return res.status(200).send(createData);

    } catch (error) {
        return error
    }
}

module.exports.deleteParticipant = async (req, res, next) => {
    let id = req.params.id;
    try {
       
        const deletedata = await  participantModel.deleteOne({ _id: req.params.id });
        res.status(200).send(deletedata);

    } catch (error) {
        return error
    }
}



// participantname:req.body.participantname,
// age:req.body.age, 
// gender:req.body.gender, 
// tournamentid:req.body.tournamentid