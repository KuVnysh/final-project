import React from 'react';
import '../styles/Navbar.css';
import {Link} from 'react-router-dom'
import logo from "../content/logo.png"


function Navbar() {
    return (
            <div className='navbar'>
                <div className="logo">
                <img src={logo}></img>
                <h2>Damu Kid</h2>
                </div>
                <div style={{ fontWeight:"bold"}} className='navbar__list'>
                    <ul>
                        <li>
                            <Link to="/AboutUs">About Us</Link>
                        </li>

                        <li>
                            <Link to="/Contacts">Contacts</Link>
                        </li>
                        
                        <li>
                            <Link to="/CreatePost">Write a Story</Link>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default Navbar
