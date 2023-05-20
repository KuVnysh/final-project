import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Numbers.css";
import Zero from "../content/0.jpg"
import One from "../content/1.jpg"
import Two from "../content/2.jpg"
import Three from "../content/3.jpg"
import Four from "../content/4.jpg"
import Five from "../content/5.jpg"
import Six from "../content/6.jpg"
import Seven from "../content/7.jpg"
import Eight from "../content/8.jpg"
import Nine from "../content/9.jpg"
import ZZero from "../content/0.m4a"
import OOne from "../content/1.m4a"
import TTwo from "../content/2.m4a"
import TThree from "../content/3.m4a"
import FFour from "../content/4.m4a"
import FFive from "../content/5.m4a"
import SSix from "../content/6.m4a"
import SSeven from "../content/7.m4a"
import EEight from "../content/8.m4a"
import NNine from "../content/9.m4a"


function Numbers () {
    function playZZero() {
        new Audio(ZZero).play()
    }
    function playOOne() {
        new Audio(OOne).play()
    }
    function playTTwo() {
        new Audio(TTwo).play()
    }
    function playTThree() {
        new Audio(TThree).play()
    }
    function playFFour() {
        new Audio(FFour).play()
    }
    function playFFive() {
        new Audio(FFive).play()
    }
    function playSSix() {
        new Audio(SSix).play()
    }
    function playSSeven() {
        new Audio(SSeven).play()
    }
    function playEEight() {
        new Audio(EEight).play()
    }
    function playNNine() {
        new Audio(NNine).play()
    }
    return (
        <div className='numbers'>
                <button className='number' onClick={playOOne}><input className='number' type="image" src= {One}></input></button>
                <button className='number' onClick={playTTwo}><input className='number' type="image" src= {Two}></input></button>
                <button className='number' onClick={playTThree}><input className='number' type="image" src= {Three}></input></button>
                <button className='number' onClick={playFFour}><input className='number' type="image" src= {Four}></input></button>
                <button className='number' onClick={playFFive}><input className='number' type="image" src= {Five}></input></button>
                <button className='number' onClick={playSSix}><input className='number' type="image" src= {Six}></input></button>
                <button className='number' onClick={playSSeven}><input className='number' type="image" src= {Seven}></input></button>
                <button className='number' onClick={playEEight}><input className='number' type="image" src= {Eight}></input></button>
                <button className='number' onClick={playNNine}><input className='number' type="image" src= {Nine}></input></button>
                <button className='number' onClick={playZZero}><input className='number' type="image" src= {Zero}></input></button>

        </div>
    )
}

export default Numbers;