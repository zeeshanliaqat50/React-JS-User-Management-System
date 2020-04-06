import React from 'react'
import {Link} from 'react-router-dom'
import UserRgt from './UserRegisteration'

export default function NavRender() {
    return (
        <div className="container"   >

            <ul className="nav navbar-xl bg-dark navbar-dark"  >
            <a className="navbar-brand font-italic font-weight-bold" href="#">
                PEOPLE MANAGEMENT
            </a>
                <Link to="/home">
                <li className="nav-item">
                    <a className="nav-link "  href="#" style={{color: 'white'}}>RECORDS</a>
                </li>
                </Link>
                <Link to="/search">
                <li className="nav-item">
                    <a className="nav-link" style={{color: 'white'}}  href="#">SEARCH RECORDS</a>
                </li>
                </Link>
                <Link to="/add">
                <li className="nav-item">
                    <a className="nav-link"   style={{color: 'white'}} href="#">ADD RECORD</a>
                </li>
                </Link>
               
            </ul>

           
           </div>
       
    )
}