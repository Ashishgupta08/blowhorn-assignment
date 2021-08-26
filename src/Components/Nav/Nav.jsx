import React, { useState } from 'react'
import './nav.css'
import { search, hamBurger, separator } from '../../Utils/icons'

export function Nav() {
    const [isVisible, setIsVisible] = useState("none");
    return (
        <nav>
            <h1 className="logo">nullBrains</h1>
            <h1 className="hamburger" onClick={() => { setIsVisible(isVisible => isVisible === "none" ? "flex" : "none") }}>{hamBurger}</h1>
            <div className="nav-options" style={{ display: isVisible }} onClick={() => { setIsVisible(isVisible => isVisible === "flex" ? "none" : "flex") }}>
                <div className="drawer">
                    <span className="separator">{separator}</span>
                    <ul className="nav-icons">
                        <li>Home</li>
                        <li>Features</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li className="search">{search}</li>
                    </ul>
                    <div className="nav-btn">
                        <button className="secondary-btn">Sign In</button>
                        <button className="primary-btn">Sign Up</button>
                    </div>
                </div>
            </div>
            <div className="nav-pc">
                <ul className="nav-icons">
                    <li className="nav-pills">Home</li>
                    <li className="nav-pills">Features</li>
                    <li className="nav-pills">Blog</li>
                    <li className="nav-pills">Contact</li>
                    <li className="search nav-pills">{search}</li>
                </ul>
                <div className="nav-btn">
                    <button className="secondary-btn">Sign In</button>
                    <button className="primary-btn">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}
