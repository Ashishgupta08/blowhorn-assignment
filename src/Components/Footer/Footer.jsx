import React from 'react'
import './footer.css'
import { dribble, twitter, facebook, instagram, github } from '../../Utils/icons'

export function Footer() {
    return (
        <div className="footer" id="footer">
            <ul className="list">
                <li>About</li>
                <li>Blog</li>
                <li>Team</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Terms</li>
            </ul>
            <ul className="list">
                <li>{facebook}</li>
                <li>{instagram}</li>
                <li>{twitter}</li>
                <li>{github}</li>
                <li>{dribble}</li>
            </ul>
            <p>&#169; 2021 nullDesigners, Inc. All rights reserved</p>
        </div>
    )
}
