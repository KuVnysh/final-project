import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Fruits.css";
import Pear from "../content/Pear.png"
import Grapes from "../content/Grapes.png"
import Apricot from "../content/Apricot.png"
import Persimmon from "../content/Persimmon.png"
import Pomegranate from "../content/Pomegranate.png"
import Strawberry from "../content/Strawberry.png"
import Watermelon from "../content/Watermelon.png"
import Peach from "../content/Peach.png"
import Apple from "../content/Apple.png"
import Cherry from "../content/Cherry.png"
import Kiwi from "../content/Kiwi.png"
import Lemon from "../content/Lemon.png"
import PPear from "../content/Pear.m4a"
import GGrapes from "../content/Grapes.m4a"
import AApricot from "../content/Apricot.m4a"
import PPersimmon from "../content/Persimmon.m4a"
import PPomegranate from "../content/Pomegranate.m4a"
import SStrawberry from "../content/Strawberry.m4a"
import WWatermelon from "../content/Watermelon.m4a"
import PPeach from "../content/Peach.m4a"
import AApple from "../content/Apple.m4a"
import CCherry from "../content/Cherry.m4a"
import KKiwi from "../content/Kiwi.m4a"
import LLemon from "../content/Lemon.m4a"


function Fruits () {
    function playPPear() {
        new Audio(PPear).play()
    }
    function playGGrapes() {
        new Audio(GGrapes).play()
    }
    function playAApricot() {
        new Audio(AApricot).play()
    }
    function playPPersimmon() {
        new Audio(PPersimmon).play()
    }
    function playPPomegranate() {
        new Audio(PPomegranate).play()
    }
    function playSStrawberry() {
        new Audio(SStrawberry).play()
    }
    function playWWatermelon() {
        new Audio(WWatermelon).play()
    }
    function playAApple() {
        new Audio(AApple).play()
    }
    function playCCherry() {
        new Audio(CCherry).play()
    }
    function playKKiwi() {
        new Audio(KKiwi).play()
    }
    function playLLemon() {
        new Audio(LLemon).play()
    }
    function playPPeach() {
        new Audio(PPeach).play()
    }
    return (
        <div className='fruits'>
                <button className='fruit' onClick={playPPear}><input className='fruit' type="image" src= {Pear}></input></button>
                <button className='fruit' onClick={playGGrapes}><input className='fruit' type="image" src= {Grapes}></input></button>
                <button className='fruit' onClick={playAApricot}><input className='fruit' type="image" src= {Apricot}></input></button>
                <button className='fruit' onClick={playPPersimmon}><input className='fruit' type="image" src= {Persimmon}></input></button>
                <button className='fruit' onClick={playPPomegranate}><input className='fruit' type="image" src= {Pomegranate}></input></button>
                <button className='fruit' onClick={playSStrawberry}><input className='fruit' type="image" src= {Strawberry}></input></button>
                <button className='fruit' onClick={playWWatermelon}><input className='fruit' type="image" src= {Watermelon}></input></button>
                <button className='fruit' onClick={playPPeach}><input className='fruit' type="image" src= {Peach}></input></button>
                <button className='fruit' onClick={playAApple}><input className='fruit' type="image" src= {Apple}></input></button>
                <button className='fruit' onClick={playCCherry}><input className='fruit' type="image" src= {Cherry}></input></button>
                <button className='fruit' onClick={playKKiwi}><input className='fruit' type="image" src= {Kiwi}></input></button>
                <button className='fruit' onClick={playLLemon}><input className='fruit' type="image" src= {Lemon}></input></button>
        </div>
    )
}

export default Fruits;