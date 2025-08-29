import React, { useState } from 'react'
import ServerContext from "./ServerContext.js";
import axios from 'axios';

const server = axios.create(
    {
        baseURL: `${import.meta.env.VITE_API_BACKEND_URL}` || "http://localhost:3333/api/v1/",
        withCredentials: true
    }
)

function ServerContextProvider({children}) {

    let [lang, setLang] = useState("hi-IN");

    let handleTextSpeech = async(text)=>
    {
       try {
        let serRes = await server.post("/TTS", 
            {
                textToSpeech: text,
                langCode: lang,
            }
        );
        if(serRes.status == 200)
        {
            console.log(serRes.data.message)
            return serRes.data.message;
        }
        else{
            alert(serRes.data.message);
        }
       } catch (error) {
        alert(error);
       }
    }


  return (
    <ServerContext.Provider value={{handleTextSpeech, lang, setLang}}>
      {children}
    </ServerContext.Provider>
  )
}

export default ServerContextProvider
