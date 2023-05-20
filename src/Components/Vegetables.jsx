import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Vegetables.css";
import Onion from "../content/Onion.png"
import Potato from "../content/Potato.png"
import Tomato from "../content/Tomato.png"
import Peas from "../content/Peas.png"
import Eggplant from "../content/Eggplant.png"
import Cabbage from "../content/Cabbage.png"
import Cucumber from "../content/Cucumber.png"
import Ginger from "../content/Ginger.png"
import Carrot from "../content/Carrot.png"
import Zuccini from "../content/Zuccini.png"
import OOnion from "../content/Onion.m4a"
import PPotato from "../content/Potato.m4a"
import TTomato from "../content/Tomato.m4a"
import PPeas from "../content/Burysh.m4a"
import EEggplant from "../content/Eggplant.m4a"
import CCabbage from "../content/Cabbage.m4a"
import CCucumber from "../content/Cucumber.m4a"
import GGinger from "../content/Ginger.m4a"
import CCarrot from "../content/Carrot.m4a"
import ZZuccini from "../content/Zuccini.m4a"

function Vegetables () {
    function playOOnion() {
        new Audio(OOnion).play()
    }
    function playPPotaton() {
        new Audio(PPotato).play()
    }
    function playTTomato() {
        new Audio(TTomato).play()
    }
    function playPPeas() {
        new Audio(PPeas).play()
    }
    function playEEggplant() {
        new Audio(EEggplant).play()
    }
    function playCCabbage() {
        new Audio(CCabbage).play()
    }
    function playCCucumber() {
        new Audio(CCucumber).play()
    }
    function playGGinger() {
        new Audio(GGinger).play()
    }
    function playCCarrot() {
        new Audio(CCarrot).play()
    }
    function playZZuccini() {
        new Audio(ZZuccini).play()
    }
    return (
        <div className='vegs'>
                <button className='veg' onClick={playOOnion}><input className='veg' type="image" src= {Onion}></input></button>
                <button className='veg' onClick={playPPotaton}><input className='veg' type="image" src= {Potato}></input></button>
                <button className='veg' onClick={playTTomato}><input className='veg' type="image" src= {Tomato}></input></button>
                <button className='veg' onClick={playPPeas}><input className='veg' type="image" src= {Peas}></input></button>
                <button className='veg' onClick={playEEggplant}><input className='veg' type="image" src= {Eggplant}></input></button>
                <button className='veg' onClick={playCCabbage}><input className='veg' type="image" src= {Cabbage}></input></button>
                <button className='veg' onClick={playCCucumber}><input className='veg' type="image" src= {Cucumber}></input></button>
                <button className='veg' onClick={playGGinger}><input className='veg' type="image" src= {Ginger}></input></button>
                <button className='veg' onClick={playCCarrot}><input className='veg' type="image" src= {Carrot}></input></button>
                <button className='veg' onClick={playZZuccini}><input className='veg' type="image" src= {Zuccini}></input></button>
        </div>
    )
}

export default Vegetables;