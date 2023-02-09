import React from 'react'
import InfoMy from './InfoMy';
export default function Navbar(props) {
    return (
        <div className='container'>
            <nav>
                <div className="logo">folio<b>.</b></div>
                    <ul className="navItems">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                    <div className="links">
                        <a href={props.in} target="_blank"><i className='fa fa-linkedin'></i></a>
                        <a href='#'><i className='fa fa-instagram'></i></a>
                        <a href='#'><i className='fa fa-twitter'></i></a> 
                    </div>
            </nav>
            <InfoMy/>
        </div>
    )
}
