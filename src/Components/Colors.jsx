import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Colors.css";
import White from "../content/White.jpg"
import Yellow from "../content/Yellow.jpg"
import Orange from "../content/Orange.jpg"
import Brown from "../content/Brown.png"
import Violet from "../content/Violet.jpg"
import Pink from "../content/Pink.jpg"
import Green from "../content/Green.jpg"
import Blue from "../content/Blue.png"
import Black from "../content/Black.jpg"
import Gray from "../content/Gray.jpg"



function Colors () {
    return (
        <div className='colors'>
                <button className='color'><Link to="/White"><input className='color' type="image" src= {White}></input></Link></button>
                <button className='color'><Link to="/Yellow"><input className='color' type="image" src= {Yellow}></input></Link></button>
                <button className='color'><Link to="/Orange"><input className='color' type="image" src= {Orange}></input></Link></button>
                <button className='color'><Link to="/Brown"><input className='color' type="image" src= {Brown}></input></Link></button>
                <button className='color'><Link to="/Violet"><input className='color' type="image" src= {Violet}></input></Link></button>
                <button className='color'><Link to="/Pink"><input className='color' type="image" src= {Pink}></input></Link></button>
                <button className='color'><Link to="/Green"><input className='color' type="image" src= {Green}></input></Link></button>
                <button className='color'><Link to="/Blue"><input className='color' type="image" src= {Blue}></input></Link></button>
                <button className='color'><Link to="/Black"><input className='color' type="image" src= {Black}></input></Link></button>
                <button className='color'><Link to="/Gray"><input className='color' type="image" src= {Gray}></input></Link></button>

        </div>
    )
}

export default Colors;