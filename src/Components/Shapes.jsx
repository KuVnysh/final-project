import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Shapes.css";
import Shenber from "../content/Shenber.png"
import Ushburysh from "../content/Ushburysh.png"
import Sharshy from "../content/Sharshy.png"
import Tiktortburysh from "../content/Tiktortburysh.png"
import Sopak from "../content/Sopak.png"
import Pentagon from "../content/Pentagon.png"
import Altyburysh from "../content/Altyburysh.png"
import Zhulduz from "../content/Zhulduz.png"
import Zhurek from "../content/Zhurek.png"
import Romb from "../content/Romb.png"
import Circle from "../content/Shenber.m4a"
import Triangle from "../content/Ushburysh.m4a"
import Square from "../content/Sharshy.m4a"
import Rectangle from "../content/Rectangle.m4a"
import Oval from "../content/Sopak.m4a"
import PPentagon from "../content/Pentagon.m4a"
import Hexagon from "../content/Hexagon.m4a"
import Star from "../content/Star.m4a"
import Heart from "../content/Heart.m4a"
import RRomb from "../content/Romb.m4a"


function Shapes () {
    function playCircle() {
        new Audio(Circle).play()
    }
    function playTriangle() {
        new Audio(Triangle).play()
    }
    function playSquare() {
        new Audio(Square).play()
    }
    function playRectangle() {
        new Audio(Rectangle).play()
    }
    function playOval() {
        new Audio(Oval).play()
    }
    function playPPentagon() {
        new Audio(PPentagon).play()
    }
    function playHexagon() {
        new Audio(Hexagon).play()
    }
    function playStar() {
        new Audio(Star).play()
    }
    function playHeart() {
        new Audio(Heart).play()
    }
    function playRRomb() {
        new Audio(RRomb).play()
    }
    return (
        <div className='shapes'>
                <button className='shape' onClick={playCircle}><input className='shape' type="image" src= {Shenber}></input></button>
                <button className='shape' onClick={playTriangle}><input className='shape' type="image" src= {Ushburysh}></input></button>
                <button className='shape' onClick={playSquare}><input className='shape' type="image" src= {Sharshy}></input></button>
                <button className='shape' onClick={playRectangle}><input className='shape' type="image" src= {Tiktortburysh}></input></button>
                <button className='shape' onClick={playPPentagon}><input className='shape' type="image" src= {Pentagon}></input></button>
                <button className='shape' onClick={playHexagon}><input className='shape' type="image" src= {Altyburysh}></input></button>
                <button className='shape' onClick={playRRomb}><input className='shape' type="image" src= {Romb}></input></button>
                <button className='shape' onClick={playStar}><input className='shape' type="image" src= {Zhulduz}></input></button>
                <button className='shape' onClick={playHeart}><input className='shape' type="image" src= {Zhurek}></input></button>
                <button className='shape' onClick={playOval}><input className='shape' type="image" src= {Sopak}></input></button>

        </div>
    )
}

export default Shapes;