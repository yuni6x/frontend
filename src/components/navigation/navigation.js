import React from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify, FaUser } from "react-icons/fa";

function Navigation({ logout, hidden, toggleHidden, auth }) {
    return (
        <nav>
            <div className="navigate-title">
                <button id="hamburger-icon" onClick={toggleHidden} aria-label="Skip to content"><FaAlignJustify style={{ width: "44px", height: "44px" }} /></button>
                <Link to="/"><h1>Find Ideal Worker</h1></Link>
            </div>
            <ul className={hidden ? 'hidden navigate-link' : 'navigate-link'}>
                {
                    auth ?
                        <>
                            <li><Link to="/home">Home</Link></li>
                            {
                                JSON.parse(localStorage.getItem('auth')).role === 'Penyewa'
                                    ? <li><Link to="/your-order">Your Order</Link></li>
                                    : ''
                            }
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/help">Help</Link></li>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle text-white" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <FaUser style={{ minWidth: "30px", minHeight: "30px" }} /> 
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link to={"/profile/" + JSON.parse(localStorage.getItem('auth')).id} className="dropdown-item dropdown-btn">Your Profile</Link>
                                    <button className="dropdown-item logout dropdown-btn" onClick={logout} type="button">Logout</button>
                                </div>
                            </div>
                        </>

                        :
                        <>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/help">Help</Link></li>
                            <li><Link to="/register">Daftar</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>


                }

            </ul>
        </nav>
    )
}

export default Navigation