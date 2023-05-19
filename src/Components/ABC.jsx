import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/ABC.css";
import А from "../content/А.jpg"
import Ә from "../content/Ә.jpg"
import Б from "../content/Б.jpg"
import В from "../content/В.jpg"
import Г from "../content/Г.jpg"
import Г1 from "../content/г1.jpg"
import Д from "../content/Д.jpg"
import Е from "../content/Е.jpg"
import Ё from "../content/Ё.jpg"
import Ж from "../content/Ж.jpg"
import З from "../content/З.jpg"
import И from "../content/И.jpg"
import Й from "../content/Й.jpg"
import К from "../content/К.jpg"
import К1 from "../content/К1.jpg"
import Л from "../content/Л.jpg"
import М from "../content/М.jpg"
import Н from "../content/Н.jpg"
import Н1 from "../content/Н1.jpg"
import О from "../content/О.jpg"
import О1 from "../content/О1.jpg"
import П from "../content/П.jpg"
import Р from "../content/Р.jpg"
import С from "../content/С.jpg"
import Т from "../content/Т.jpg"
import У from "../content/У.jpg"
import У1 from "../content/У1.jpg"
import У2 from "../content/У2.jpg"
import Ф from "../content/Ф.jpg"
import Х from "../content/Х.jpg"
import H from "../content/H.jpg"
import Ц from "../content/Ц.jpg"
import Ч from "../content/Ч.jpg"
import Ш from "../content/Ш.jpg"
import Щ from "../content/Щ.jpg"
import Ъ from "../content/Ъ.jpg"
import Ы from "../content/Ы.jpg"
import Ы1 from "../content/Ы1.jpg"
import Ь from "../content/Ь.jpg"
import Э from "../content/Э.jpg"
import Ю from "../content/Ю.jpg"
import Я from "../content/Я.jpg"
import AS from "../content/AS.mp3"


function ABC() {
    return (
        <div className='alphabet'>
                <audio id='AAA' src={AS} controls></audio>

                <button className='letter'><Link to="/А"><input className='letter' type="image" src= {А}></input></Link></button>
                <button className='letter'><Link to="/Ә"><input className='letter' type="image" src= {Ә}></input></Link></button>
                <button className='letter'><Link to="/Б"><input className='letter' type="image" src= {Б}></input></Link></button>
                <button className='letter'><Link to="/В"><input className='letter' type="image" src= {В}></input></Link></button>
                <button className='letter'><Link to="/Г"><input className='letter' type="image" src= {Г}></input></Link></button>
                <button className='letter'><Link to="/Ғ"><input className='letter' type="image" src= {Г1}></input></Link></button>
                <button className='letter'><Link to="/Д"><input className='letter' type="image" src= {Д}></input></Link></button>
                <button className='letter'><Link to="/Е"><input className='letter' type="image" src= {Е}></input></Link></button>
                <button className='letter'><Link to="/Ё"><input className='letter' type="image" src= {Ё}></input></Link></button>
                <button className='letter'><Link to="/Ж"><input className='letter' type="image" src= {Ж}></input></Link></button>
                <button className='letter'><Link to="/З"><input className='letter' type="image" src= {З}></input></Link></button>
                <button className='letter'><Link to="/И"><input className='letter' type="image" src= {И}></input></Link></button>
                <button className='letter'><Link to="/Й"><input className='letter' type="image" src= {Й}></input></Link></button>
                <button className='letter'><Link to="/К"><input className='letter' type="image" src= {К}></input></Link></button>
                <button className='letter'><Link to="/Қ"><input className='letter' type="image" src= {К1}></input></Link></button>
                <button className='letter'><Link to="/Л"><input className='letter' type="image" src= {Л}></input></Link></button>
                <button className='letter'><Link to="/М"><input className='letter' type="image" src= {М}></input></Link></button>
                <button className='letter'><Link to="/Н"><input className='letter' type="image" src= {Н}></input></Link></button>
                <button className='letter'><Link to="/Ң"><input className='letter' type="image" src= {Н1}></input></Link></button>
                <button className='letter'><Link to="/О"><input className='letter' type="image" src= {О}></input></Link></button>
                <button className='letter'><Link to="/Ө"><input className='letter' type="image" src= {О1}></input></Link></button>
                <button className='letter'><Link to="/П"><input className='letter' type="image" src= {П}></input></Link></button>
                <button className='letter'><Link to="/Р"><input className='letter' type="image" src= {Р}></input></Link></button>
                <button className='letter'><Link to="/С"><input className='letter' type="image" src= {С}></input></Link></button>
                <button className='letter'><Link to="/Т"><input className='letter' type="image" src= {Т}></input></Link></button>
                <button className='letter'><Link to="/У"><input className='letter' type="image" src= {У}></input></Link></button>
                <button className='letter'><Link to="/Ұ"><input className='letter' type="image" src= {У1}></input></Link></button>
                <button className='letter'><Link to="/Ү"><input className='letter' type="image" src= {У2}></input></Link></button>
                <button className='letter'><Link to="/Ф"><input className='letter' type="image" src= {Ф}></input></Link></button>
                <button className='letter'><Link to="/Х"><input className='letter' type="image" src= {Х}></input></Link></button>
                <button className='letter'><Link to="/Һ"><input className='letter' type="image" src= {H}></input></Link></button>
                <button className='letter'><Link to="/Ц"><input className='letter' type="image" src= {Ц}></input></Link></button>
                <button className='letter'><Link to="/Ч"><input className='letter' type="image" src= {Ч}></input></Link></button>
                <button className='letter'><Link to="/Ш"><input className='letter' type="image" src= {Ш}></input></Link></button>
                <button className='letter'><Link to="/Щ"><input className='letter' type="image" src= {Щ}></input></Link></button>
                <button className='letter'><Link to="/Ъ"><input className='letter' type="image" src= {Ъ}></input></Link></button>
                <button className='letter'><Link to="/Ы"><input className='letter' type="image" src= {Ы}></input></Link></button>
                <button className='letter'><Link to="/І"><input className='letter' type="image" src= {Ы1}></input></Link></button>
                <button className='letter'><Link to="/Ь"><input className='letter' type="image" src= {Ь}></input></Link></button>
                <button className='letter'><Link to="/Э"><input className='letter' type="image" src= {Э}></input></Link></button>
                <button className='letter'><Link to="/Ю"><input className='letter' type="image" src= {Ю}></input></Link></button>
                <button className='letter'><Link to="/Я"><input className='letter' type="image" src= {Я}></input></Link></button>
        </div>
    )
}

export default ABC;