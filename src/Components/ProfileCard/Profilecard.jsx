import React from 'react'
import './profilecard.css'

export function Profilecard(props) {
    const { data } = props;
    return (
        <div className="profile-card">
            <div className="img-container">
                <img src={data.img} alt="Name" className="profile-img" />
            </div>
            <p className="profile-name">{data.name}</p>
            <p className="profile-designation">{data.designation}</p>
        </div>
    )
}
