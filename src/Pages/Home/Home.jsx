import React from 'react'
import './home.css'
import img1 from '../../Utils/images/boost-productivity.jpg'
import img2 from '../../Utils/images/automated-task.jpg'
import { featureData } from '../../Utils/featuresData'
import { FeatureCard, Profilecard } from '../../Components'
import teamMembers from '../../Utils/teamdata.json'

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

            <section className="feature-section" id="features">
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

            <section className="team-section" id="team">
                <p className="team-text">Our Team</p>
                <p className="team-heading">An incredible team of amazing individuals</p>
                <div className="team-members">
                    {
                        teamMembers.map(
                            member => <Profilecard key={member.id} data={member} />
                        )
                    }
                </div>
            </section>

            <section className="blog-section" id="blog">
                <p className="blog-heading">The Project Blog</p>
                <p className="blog-text">Designs and layouts to help with your app.</p>
                <div className="blog-article">
                    <article>
                        <div className="blog-content">
                            <img src="https://cdn.pixabay.com/photo/2018/04/17/11/03/cocktail-3327242_960_720.jpg" alt="Juice" className="blog-img" />
                            <p className="blog-title">Refreshing Designs</p>
                            <p className="blog-tag">Resources</p>
                            <p className="blog-matter">Quench satisfying designs to help your stir up emotion and tell a story.</p>
                        </div>
                    </article>
                    <article>
                        <div className="blog-content" style={{backgroundColor: "#667F80"}}>
                            <img src="https://cdn.pixabay.com/photo/2020/05/15/19/37/book-5174879_960_720.jpg" alt="Books" className="blog-img" />
                            <p className="blog-title">Reading Habit</p>
                            <p className="blog-tag" style={{color: "#667F80"}}>Books</p>
                            <p className="blog-matter">Quench satisfying designs to help your stir up emotion and tell a story.</p>
                        </div>
                    </article>
                    <article>
                        <div className="blog-content" style={{backgroundColor: "#7C080B"}}>
                            <img src="https://cdn.pixabay.com/photo/2018/03/08/19/39/cup-3209625_960_720.jpg" alt="Juice" className="blog-img" />
                            <p className="blog-title">Refreshing Designs</p>
                            <p className="blog-tag" style={{color: "#7C080B"}}>Resources</p>
                            <p className="blog-matter">Quench satisfying designs to help your stir up emotion and tell a story.</p>
                        </div>
                    </article>
                    <article>
                        <div className="blog-content-2">
                            <img src="https://cdn.pixabay.com/photo/2016/03/09/09/17/desktop-1245714_960_720.jpg" alt="Juice" className="blog-img-2" />
                            <p className="blog-title">Refreshing Designs</p>
                            <p className="blog-tag" style={{backgroundColor: "#F87171", color: "#ffffff"}}>Inspiration</p>
                            <p className="blog-matter">Quench satisfying designs to help your stir up emotion and tell a story.</p>
                        </div>
                    </article>
                    <article>
                        <div className="blog-content-2">
                            <img src="https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_960_720.jpg" alt="Juice" className="blog-img-2" />
                            <p className="blog-title">Coffee for Productivity</p>
                            <p className="blog-tag" style={{backgroundColor: "#6293C7", color: "#ffffff"}}>Coffee</p>
                            <p className="blog-matter">Quench satisfying designs to help your stir up emotion and tell a story.</p>
                        </div>
                    </article>
                    <article>
                        <div className="blog-content-2">
                            <img src="https://cdn.pixabay.com/photo/2015/06/08/15/11/typewriter-801921_960_720.jpg" alt="Juice" className="blog-img-2" />
                            <p className="blog-title">A Design Mindset</p>
                            <p className="blog-tag" style={{backgroundColor: "#999B83", color: "#ffffff"}}>Resources</p>
                            <p className="blog-matter">Quench satisfying designs to help your stir up emotion and tell a story.</p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}
