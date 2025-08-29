const express = require("express");
const startAi = require("../utils/AIFun");
const router = express.Router();

router.route("/TTS")
.post(async(req, res)=>
{
    try {

        let {textToSpeech} = req.body;
        let {langCode} = req.body;
        console.log("text is ", textToSpeech);
        let voiceLink = await startAi(textToSpeech, langCode);
        res.status(200).json({message: voiceLink});

    } catch (error) {
        console.log("err is: ",error)
        res.status(500).json({message: error})
    }
});


module.exports = router