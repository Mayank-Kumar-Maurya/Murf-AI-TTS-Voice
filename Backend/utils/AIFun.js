const axios = require('axios');


let startAi = async(text, langCode)=>
{
  
    let data = JSON.stringify({
        "text": text,
          "voiceId": "en-UK-ruby",
          "style": "Conversational",
          "pitch": 0,
          "multiNativeLocale": langCode || "hi-IN",
        });
        
        let config = {
        method: 'post',
        url: 'https://api.murf.ai/v1/speech/generate',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'api-key': process.env.MURF_API_KEY,
        },
        data : data
        };
        
        let apiRes = axios(config);
        let speechVoice = await apiRes;
        console.log("Audio",speechVoice.data.audioFile);
        return speechVoice.data.audioFile;
}

module.exports = startAi;