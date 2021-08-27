import React from 'react'
import './featcard.css'

export function FeatureCard(props) {
    const { data } = props;

    return (
        <div className="featcard">
            <p className="featicon">{data.icon}</p>
            <p className="feattitle">{data.title}</p>
            <p className="featdesc">{data.description}</p>
        </div>
    )
}
