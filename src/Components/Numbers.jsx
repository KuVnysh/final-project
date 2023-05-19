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



function Numbers () {
    return (
        <div className='numbers'>
                <button className='number'><Link to="/One"><input className='number' type="image" src= {One}></input></Link></button>
                <button className='number'><Link to="/Two"><input className='number' type="image" src= {Two}></input></Link></button>
                <button className='number'><Link to="/Three"><input className='number' type="image" src= {Three}></input></Link></button>
                <button className='number'><Link to="/Four"><input className='number' type="image" src= {Four}></input></Link></button>
                <button className='number'><Link to="/Five"><input className='number' type="image" src= {Five}></input></Link></button>
                <button className='number'><Link to="/Six"><input className='number' type="image" src= {Six}></input></Link></button>
                <button className='number'><Link to="/Seven"><input className='number' type="image" src= {Seven}></input></Link></button>
                <button className='number'><Link to="/Eight"><input className='number' type="image" src= {Eight}></input></Link></button>
                <button className='number'><Link to="/Nine"><input className='number' type="image" src= {Nine}></input></Link></button>
                <button className='number'><Link to="/Zero"><input className='number' type="image" src= {Zero}></input></Link></button>

        </div>
    )
}

export default Numbers;