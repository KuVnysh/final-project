import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Home.css";
import alphabet from "../content/alphabet.jpg"
import numbers from "../content/numbers.jpg"
import colors from "../content/colors.jpg"
import body from "../content/body.jpg"
import shapes from "../content/shapes.jpg"
import animals from "../content/animals.jpg"
import vegs from "../content/vegs.webp"
import fruits from "../content/fruits.webp"



function Home() {
    return (
        <div className='buttons'>
            <button className='button'><Link to="/ABC"><input className='button' type="image" src= {alphabet}></input></Link></button>
            <button className='button'><Link to="/Numbers"><input className='button' type="image" src= {numbers}></input></Link></button>
            <button className='button'><Link to="/Colors"><input className='button' type="image" src= {colors}></input></Link></button>
            <button className='button'><Link to="/Body"><input className='button' type="image" src= {body}></input></Link></button>
            <button className='button'><Link to="/Shapes"><input className='button' type="image" src= {shapes}></input></Link></button>
            <button className='button'><Link to="/Animals"><input className='button' type="image" src= {animals}></input></Link></button>
            <button className='button'><Link to="/Vegetables"><input className='button' type="image" src= {vegs}></input></Link></button>
            <button className='button'><Link to="/Fruits"><input className='button' type="image" src= {fruits}></input></Link></button>   
        </div>
            );
        }   

  
  export default Home;
