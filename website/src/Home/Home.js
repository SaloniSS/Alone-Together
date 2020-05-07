import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

const Home = () => {
    return(
        <div>
            <div className="intro-bar">
                <h1>🌟 Together Alone 🌟</h1>
                <h1>Community Recommendations &amp; Activities</h1>
            </div>
            <div className="about">
                <h2>About</h2>
                <p>
                    This is a collaborative, open-source resource for the community to 
                    share ways we are staying creative, motivated or productive with the extra time we have. 
                    It's a great reminder that community is not just a group of people, 
                    it's the sharing of ideas, experiences, and knowledge. 
                    Feel free to check back regularly for new updates from the community 
                    so we can still be together while apart!
                </p>
            </div>
            <div className="buttons">
                <Link to ='/get-support' >
                    <button className="button">💜 To Get Support 💜</button>
                </Link>
                <Link to ='/hustle' >
                    <button className="button">💻 To Hustle 💻</button>
                </Link>
                <Link to ='/relax' >
                    <button className="button">📖 To Relax 📖</button>
                </Link>
                <Link to ='/attend' >
                    <button className="button">🎟️ To Attend 🎟️</button>
                </Link>
                <Link to ='/host' >
                    <button className="button">💫 To Host 💫</button>
                </Link>
                <Link to ='/add-resource' >
                    <button className="button">Submit A Resource</button>
                </Link>
            </div>
            <div className="know">
                <h2>Things To Know</h2>
                <ol>
                    <li>
                        Check out all the categories we have in the different tabs!
                        Each category has a brief description so you can see what it's about.
                    </li>
                    <li>
                        Add anything you believe is relevant for the community.
                        Consider hosting a virtual meetup!
                    </li>
                    <li>
                        Don't have anything to add? 
                        Feel free to browse for inspiration or to join in on a virtual meet up.
                    </li>
                    <li>
                        With great power comes great responsibilities.
                        Please keep this public resource safe, inclusive, and welcoming for everyone.
                    </li>	
                    <li>
                        Feel free to share this resource with your friends, classmates, or anyone that need this.
                    </li>	
                </ol>	
            </div>
            <div className="support">
                <h2>Need Support?</h2>
                <p>
                    Reach out to <a 
                        href="mailto:salonishivdasani@gmail.com?Subject=Alone%20Together%20Inquiry" 
                        target="_top">
                            salonishivdasani@gmail.com
                    </a> and I'd be happy to help!
                </p>
            </div>
        </div>
    );
};

export default Home;