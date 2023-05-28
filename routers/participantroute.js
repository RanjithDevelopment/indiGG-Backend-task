const express = require("express");
const participantModule = require("../modules/participantModule.js");
const router =express.Router();

router.get('/get',participantModule.getparticipant);
router.put('/edit/:id',participantModule.editParticipant);
router.post('/create',participantModule.createParticipant);
router.delete('/delete/:id',participantModule.deleteParticipant);

module.exports=router;