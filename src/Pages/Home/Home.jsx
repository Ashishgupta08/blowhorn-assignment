import React from 'react'
import './home.css'

export function Home() {
    return (
        <div>
            <header>
                <h1 className="heading-one">Start Crafting Your</h1>
                <h1 className="heading-two">Next Great Idea</h1>
                <p className="header-text">
                    Simplify the creation of landing pages, blog pages,
                    application pages and so much more!
                </p>
                <div className="header-btn">
                    <button className="primary-btn">Purchase Now</button>
                    <span className="offer">only $15/mo</span>
                </div>
                <p className="link">Learn More</p>
            </header>
        </div>
    )
}
