import React from 'react'
import './home.css'
import img1 from '../../Utils/images/boost-productivity.jpg'
import img2 from '../../Utils/images/automated-task.jpg'
import { featureData } from '../../Utils/featuresData'
import { FeatureCard } from '../../Components'

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

            <section>
                <p className="section-text">Trusted By Top Leading Companies</p>
                <div className="companies">
                    <img src="https://download.logo.wine/logo/Disney%2B/Disney%2B-Logo.wine.png" alt="Disney+" className="company-img" />
                    <img src="https://download.logo.wine/logo/Google/Google-Logo.wine.png" alt="Google" className="company-img" />
                    <img src="https://download.logo.wine/logo/HubSpot/HubSpot-Logo.wine.png" alt="HubSpot" className="company-img" />
                    <img src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png" alt="Youtube" className="company-img" />
                    <img src="https://download.logo.wine/logo/Slack_Technologies/Slack_Technologies-Logo.wine.png" alt="Slack" className="company-img" />
                    <img src="https://download.logo.wine/logo/Shopify/Shopify-Logo.wine.png" alt="Shopify" className="company-img" />
                </div>
            </section>

            <section className="offering-section">
                <img src={img1} alt="Boost Productivity" className="offering-img" />
                <div className="offering-text">
                    <p className="offering-heading">Boost Productivity</p>
                    <p className="offering-primary-text">
                        Build an atmosphere that creates productivity in
                        your organization and your company culture.
                    </p>
                    <ul className="offering-secondary-text">
                        <li>Maximize productivity and growth</li>
                        <li>Speed past your competition</li>
                        <li>Learn the top techniques</li>
                    </ul>
                </div>
            </section>

            <section className="offering-section">
                <div className="offering-text">
                    <p className="offering-heading">Automated Task</p>
                    <p className="offering-primary-text">
                        Save time and money with our revolutionary
                        services. We are the leaders in the industry.
                    </p>
                    <ul className="offering-secondary-text">
                        <li>Automated task management work flow</li>
                        <li>Detailed analytics for your data</li>
                        <li>Some awesome integrations</li>
                    </ul>
                </div>
                <img src={img2} alt="Automated Task" className="offering-img" />
            </section>

            <section className="feature-section">
                <p className="feature-heading">Our Features</p>
                <p className="feature-text">Check out our list of awesome features below.</p>
                <div className="features">
                    {
                        featureData.map(
                            feat => <FeatureCard key={feat.id} data={feat} />
                        )
                    }
                </div>
            </section>
        </div>
    )
}
