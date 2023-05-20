import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Animals.css";
import Horse from "../content/Horse.png"
import Cow from "../content/Cow.png"
import Sheep from "../content/Sheep.png"
import Pig from "../content/Pig.png"
import Chicken from "../content/Chicken.png"
import Bear from "../content/Bear.png"
import Croc from "../content/Croc.png"
import Dog from "../content/Dog.png"
import Fox from "../content/Fox.png"
import Frog from "../content/Frog.png"
import Giraffe from "../content/Giraffe.png"
import Lion from "../content/Lion.png"
import Monkey from "../content/Monkey.png"
import Rabbit from "../content/Rabbit.png"
import Tiger from "../content/Tiger.png"
import HHorse from "../content/Horse.m4a"
import CCow from "../content/Cow.m4a"
import SSheep from "../content/Sheep.m4a"
import PPig from "../content/Pig.m4a"
import CChicken from "../content/Chicken.m4a"
import BBear from "../content/Bear.m4a"
import CCroc from "../content/Croc.m4a"
import DDog from "../content/Dog.m4a"
import FFox from "../content/Fox.m4a"
import FFrog from "../content/Frog.m4a"
import GGiraffe from "../content/Giraffe.m4a"
import LLion from "../content/Lion.m4a"
import MMonkey from "../content/Monkey.m4a"
import RRabbit from "../content/Rabbit.m4a"
import TTiger from "../content/Tiger.m4a"



function Animals () {
    function playHHorse() {
        new Audio(HHorse).play()
    }
    function playCCow() {
        new Audio(CCow).play()
    }
    function playSSheep() {
        new Audio(SSheep).play()
    }
    function playPPig() {
        new Audio(PPig).play()
    }
    function playCChicken() {
        new Audio(CChicken).play()
    }
    function playBBear() {
        new Audio(BBear).play()
    }
    function playCCroc() {
        new Audio(CCroc).play()
    }
    function playDDog() {
        new Audio(DDog).play()
    }
    function playFFox() {
        new Audio(FFox).play()
    }
    function playFFrog() {
        new Audio(FFrog).play()
    }
    function playGGiraffe() {
        new Audio(GGiraffe).play()
    }
    function playLLion() {
        new Audio(LLion).play()
    }
    function playMMonkey() {
        new Audio(MMonkey).play()
    }
    function playRRabbit() {
        new Audio(RRabbit).play()
    }
    function playTTiger() {
        new Audio(TTiger).play()
    }
    return (
        <div className='zoo'>
                <button className='animal' onClick={playHHorse}><input className='animal' type="image" src= {Horse}></input></button>
                <button className='animal' onClick={playCCow}><input className='animal' type="image" src= {Cow}></input></button>
                <button className='animal' onClick={playSSheep}><input className='animal' type="image" src= {Sheep}></input></button>
                <button className='animal' onClick={playCChicken}><input className='animal' type="image" src= {Chicken}></input></button>
                <button className='animal' onClick={playDDog}><input className='animal' type="image" src= {Dog}></input></button>
                <button className='animal' onClick={playPPig}><input className='animal' type="image" src= {Pig}></input></button>
                <button className='animal' onClick={playBBear}><input className='animal' type="image" src= {Bear}></input></button>
                <button className='animal' onClick={playCCroc}><input className='animal' type="image" src= {Croc}></input></button>
                <button className='animal' onClick={playFFox}><input className='animal' type="image" src= {Fox}></input></button>
                <button className='animal' onClick={playFFrog}><input className='animal' type="image" src= {Frog}></input></button>
                <button className='animal' onClick={playGGiraffe}><input className='animal' type="image" src= {Giraffe}></input></button>
                <button className='animal' onClick={playLLion}><input className='animal' type="image" src= {Lion}></input></button>
                <button className='animal' onClick={playMMonkey}><input className='animal' type="image" src= {Monkey}></input></button>
                <button className='animal' onClick={playRRabbit}><input className='animal' type="image" src= {Rabbit}></input></button>
                <button className='animal' onClick={playTTiger}><input className='animal' type="image" src= {Tiger}></input></button>

        </div>
    )
}

export default Animals;