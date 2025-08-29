import { useContext, useEffect, useRef, useState } from 'react'
import './App.css'
import ServerContext from './Context/ServerContext.js';
import Languages from './Components/Languages.jsx';
import Loader from './Components/Loader.jsx';

function App() {

  let [text, setText] = useState("");
  let [load, setLoad] = useState(false);
  let [flag, setFlag] = useState(false);
  let [voiceLink, setVoiceLink] = useState("https://murf.ai/user-upload/one-day-temp/bd2f63fc-5e71-402d-906c-62802a5476b2.wav?response-cache-control=max-age%3D604801&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250826T000000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=259200&X-Amz-Credential=AKIA27M5532DYKBCJICE%2F20250826%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=c2eb9bceb73a52ffd9856148e259be0889aaa528c6822d19c5c3a9bc0036e589");
  let {handleTextSpeech} = useContext(ServerContext);

  let handleTextConvertor = async()=>
  {
    if(text !== "")
    {
      setLoad(true);
      setFlag(false);
      let resVoice = await handleTextSpeech(text);
      console.log("voice link",resVoice)
      setVoiceLink(resVoice);
      setLoad(false);
    }
    else
    {
      setFlag(false);
      alert("Text is empty");
    }

  }

  let audioPlay = useRef();

  

  let handlePlayPause = (e)=>
  {
    e.preventDefault();
    setFlag((preVal)=> preVal = !preVal);
  }

  let handlePlay = ()=>
  {
    // e.preventDefault();
    console.log("click")
    console.log(audioPlay.current);
    audioPlay.current.play();
  }
  let handlePause = ()=>
  {
    // e.preventDefault();
    console.log("pause")
    audioPlay.current.pause();
  }

  useEffect(()=>
    {
      if(flag)
        {
          handlePlay();
        }
        else
        {
          handlePause();
        }
    }, [flag, setFlag])

  return (
    <div className='align-content-center' style={{height: "100vh", backgroundColor: "#D7C1F4"}}>
     <div className="row justify-content-center m-0 p-0">
    <div className="card border border-secondary col-11 col-lg-6 col-md-9 col-sm-8" style={{boxShadow: "1px 2px 6px  black"}}>
    <h2 className='text-center mt-3'>Text To Speech</h2>
    {load ? <Loader /> : null}
      <div className="card-body text-center">
      <label htmlFor="tts" className="form-label">🎧Real Time Text To Speech</label>
          <textarea className="form-control border border-secondary" maxLength="3000" id="tts" placeholder='Write your text here!' onChange={(e)=> setText(e.target.value)} value={text} rows="3"></textarea>
          <button className='btn btn-info my-2 text-light fw-bolder' style={{boxShadow: "0 1px 2px black"}} onClick={handleTextConvertor}>🎤Convert The Text</button>

          <div>
          <audio ref={audioPlay} src={voiceLink} onEnded={()=> setFlag((preVal)=> preVal = !preVal)}></audio>
          {/* <button className='btn btn-dark m-2' style={{boxShadow: "1px 1px 2px #778899"}} onClick={ handlePlay}>⏯️🔊Play</button>
          <button className='btn btn-dark m-2' style={{boxShadow: "1px 1px 2px #778899"}} onClick={handlePause}>⏸️Pause</button> */}
          <button className='btn btn-dark m-2' style={{boxShadow: "1px 1px 2px #778899"}} onClick={handlePlayPause}>{!flag ? "⏯️🔊Play" : "⏸️Pause"}</button>

          <Languages />
        </div>
      </div>
    </div>
  </div>

     
      {/* <h2 className='text-center'>Text To Speech</h2>
        <div className="mb-3 col-6">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">TTS</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(e)=> setText(e.target.value)} value={text} rows="3"></textarea>
          <button className='btn btn-dark my-2' onClick={handleTextConvertor}>TTS</button>
        </div>
        <div>
            <audio ref={audioPlay} src={voiceLink}></audio>
          <button className='btn btn-dark m-2' onClick={ handlePlay}>Play</button>
          <button className='btn btn-dark m-2' onClick={handlePause}>Pause</button>
        </div> */}
    </div>
  )
}

export default App
