import React, { useContext, useState } from 'react'
import ServerContext from '../Context/ServerContext.js';

function Languages() {

    let regionCode = [{Locale: "en-US", Accent: "English-US & Canada"},
                      {Locale: "en-UK", Accent: "English-UK"},
                      {Locale: "en-IN", Accent: "English-India"},
                      {Locale: "hi-IN", Accent: "Hindi - India"},
                      {Locale: "ta-IN", Accent: "Tamil - India"},
                      {Locale: "bn-IN", Accent: "Bengali - India"},
                      {Locale: "en-AU", Accent: "English - Australia"},
                      {Locale: "en-SCOTT", Accent: "English-Scotland"},
                      {Locale: "es-MX", Accent: "Spanish - Mexico"},
                      {Locale: "it-IT", Accent: "Italian - Italy"},
                      {Locale: "ja-JP", Accent: "Japanese - Japan"},
                      {Locale: "zh-CN", Accent: "Chinese - China"},
                      {Locale: "ko-KR", Accent: "Korean - Korea"},
                      {Locale: "it-IT", Accent: "Italian - Italy"},
    ];

    let {setLang} = useContext(ServerContext)
    // let [lang, setLang] = useState("hi-IN");
    let [langName, setLangName] = useState("Hindi - India")

    let handleLanguage = async(e)=>
    {
        e.preventDefault();
        console.log(e.target.value, e.target.innerText);
        setLang((preVal)=> preVal = e.target.value);
        setLangName((preVal)=> preVal = e.target.innerText);

    }

    return (
        <>
            <div className="dropdown d-inline m-2" >
                <button className="btn dropdown-toggle text-light" style={{backgroundColor:"#081330", boxShadow: "1px 1px 2px black"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                🌏{langName}
                </button>
                <ul className="dropdown-menu " style={{height: "7rem", overflow: "auto"}}>
                    {/* <li><button className="dropdown-item" type="button">Action</button></li> */}
                    {regionCode.map((i, index)=>(
                        <li key={index}><button className="dropdown-item" value={i.Locale} type="button" onClick={handleLanguage}>{i.Accent}</button></li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Languages
