import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Body.css";
import Eyes from "../content/Eyes.png"
import Beard from "../content/Beard.png"
import Mustache from "../content/Mustache.png"
import Lips from "../content/Lips.png"
import Head from "../content/Head.png"
import Chicks from "../content/Chicks.png"
import Nose from "../content/Nose.png"
import Fingers from "../content/Fingers.png"
import Legs from "../content/Legs.png"
import Ears from "../content/Ears.png"
import Arm from "../content/Arm.png"
import EEyes from "../content/Eyes.m4a"
import BBeard from "../content/Beard.m4a"
import MMustache from "../content/Mustache.m4a"
import Llips from "../content/Lips.m4a"
import HHead from "../content/Head.m4a"
import CChicks from "../content/Chiks.m4a"
import NNose from "../content/Nose.m4a"
import FFingers from "../content/Finger.m4a"
import LLegs from "../content/Leg.m4a"
import EEars from "../content/Ears.m4a"
import AArm from "../content/Arm.m4a"



function Body () {
    function playEEyes(){
        new Audio(EEyes).play()
    }
    function playBBeard(){
        new Audio(BBeard).play()
    }
    function playMMustache(){
        new Audio(MMustache).play()
    }
    function playLlips(){
        new Audio(Llips).play()
    }
    function playHHead(){
        new Audio(HHead).play()
    }
    function playCChicks(){
        new Audio(CChicks).play()
    }
    function playNNose(){
        new Audio(NNose).play()
    }
    function playFFingers(){
        new Audio(FFingers).play()
    }
    function playLLegs(){
        new Audio(LLegs).play()
    }
    function playEEars(){
        new Audio(EEars).play()
    }
    function playAArm(){
        new Audio(AArm).play()
    }
    
    return (
        <div className='body'>
                <button className='parts' onClick={playEEyes}><input className='parts' type="image" src= {Eyes}></input></button>
                <button className='parts' onClick={playBBeard}><input className='parts' type="image" src= {Beard}></input></button>
                <button className='parts' onClick={playMMustache}><input className='parts' type="image" src= {Mustache}></input></button>
                <button className='parts' onClick={playLlips}><input className='parts' type="image" src= {Lips}></input></button>
                <button className='parts' onClick={playHHead}><input className='parts' type="image" src= {Head}></input></button>
                <button className='parts' onClick={playCChicks}><input className='parts' type="image" src= {Chicks}></input></button>
                <button className='parts' onClick={playNNose}><input className='parts' type="image" src= {Nose}></input></button>
                <button className='parts' onClick={playFFingers}><input className='parts' type="image" src= {Fingers}></input></button>
                <button className='parts' onClick={playLLegs}><input className='parts' type="image" src= {Legs}></input></button>
                <button className='parts' onClick={playEEars}><input className='parts' type="image" src= {Ears}></input></button>
                <button className='parts' onClick={playAArm}><input className='parts' type="image" src= {Arm}></input></button>

        </div>
    )
}

export default Body;