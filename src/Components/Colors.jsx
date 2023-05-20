import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Colors.css";
import White from "../content/White.png"
import Yellow from "../content/Yellow.png"
import Orange from "../content/Orange.png"
import Brown from "../content/Brown.png"
import Violet from "../content/Violet.png"
import Pink from "../content/Pink.png"
import Green from "../content/Green.png"
import Blue from "../content/Blue.png"
import Black from "../content/Black.png"
import Red from "../content/Red.png"
import WWhite from "../content/White.m4a"
import YYellow from "../content/Yellow.m4a"
import OOrange from "../content/Orange.m4a"
import BBrown from "../content/Brown.m4a"
import VViolet from "../content/Violet.m4a"
import PPink from "../content/Pink.m4a"
import GGreen from "../content/Green.m4a"
import BBlue from "../content/Blue.m4a"
import BBlack from "../content/Black.m4a"
import RRed from "../content/Red.m4a"


function Colors () {
    function playWWhite() {
        new Audio(WWhite).play()
    }
    function playYYellow() {
        new Audio(YYellow).play()
    }
    function playOOrange() {
        new Audio(OOrange).play()
    }
    function playBBrown() {
        new Audio(BBrown).play()
    }
    function playVViolet() {
        new Audio(VViolet).play()
    }
    function playPPink() {
        new Audio(PPink).play()
    }
    function playGGreen() {
        new Audio(GGreen).play()
    }
    function playBBlue() {
        new Audio(BBlue).play()
    }
    function playBBlack() {
        new Audio(BBlack).play()
    }
    function playRRed() {
        new Audio(RRed).play()
    }
    return (
        <div className='colors'>
                <button className='color' onClick={playWWhite}><input className='color' type="image" src= {White}></input></button>
                <button className='color' onClick={playYYellow}><input className='color' type="image" src= {Yellow}></input></button>
                <button className='color' onClick={playOOrange}><input className='color' type="image" src= {Orange}></input></button>
                <button className='color' onClick={playBBrown}><input className='color' type="image" src= {Brown}></input></button>
                <button className='color' onClick={playVViolet}><input className='color' type="image" src= {Violet}></input></button>
                <button className='color' onClick={playPPink}><input className='color' type="image" src= {Pink}></input></button>
                <button className='color' onClick={playGGreen}><input className='color' type="image" src= {Green}></input></button>
                <button className='color' onClick={playBBlue}><input className='color' type="image" src= {Blue}></input></button>
                <button className='color' onClick={playBBlack}><input className='color' type="image" src= {Black}></input></button>
                <button className='color' onClick={playRRed}><input className='color' type="image" src= {Red}></input></button>

        </div>
    )
}

export default Colors;