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
        <div style={{display: 'flex', flexDirection:'column', justifyContent: 'space-between', height: 650}}>
        <div className='buttons'>
            <button className='button'><Link to="/ABC"><input className='button' type="image" src= {alphabet}></input></Link></button>
            <button className='button'><Link to="/Numbers"><input className='button' type="image" src= {numbers}></input></Link></button>
            <button className='button'><Link to="/Colors"><input className='button' type="image" src= {colors}></input></Link></button>
            <button className='button'><Link to="/Shapes"><input className='button' type="image" src= {shapes}></input></Link></button>
            <button className='button'><Link to="/Animals"><input className='button' type="image" src= {animals}></input></Link></button>
            <button className='button'><Link to="/Vegetables"><input className='button' type="image" src= {vegs}></input></Link></button>
            <button className='button'><Link to="/Fruits"><input className='button' type="image" src= {fruits}></input></Link></button>   
            <button className='button'><Link to="/Body"><input className='button' type="image" src= {body}></input></Link></button>
        </div>
        <div style={{display: 'flex', justifyContent:'flex-end', marginRight: 100}} className="footer">Made with ❤️ at nFactorial in 2023. </div>
        </div>
   );
}   

  
  export default Home;
