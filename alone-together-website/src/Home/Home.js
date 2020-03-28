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
                    We created this collaborative, open-source doc for our community to 
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
                        Add anything you believe is relevant for HS + College young women and non-binary students.
                        Consider hosting a virtual meetup!
                    </li>
                    <li>
                        Don't have anything to add? 
                        Feel free to browse for inspiration or to join in on a virtual meet up.
                    </li>
                    <li>
                        With great power comes great responsibilities.
                        Please keep this public doc safe, inclusive, and welcoming for everyone.
                    </li>	
                    <li>
                        Feel free to share this doc with your friends, classmates, or anyone that need this.
                    </li>	
                </ol>	
            </div>
            <div className="support">
                <h2>Need Support?</h2>
                <p>
                    We created this collaborative, open-source doc for our community to 
                    share ways we are staying creative, motivated or productive with the extra time we have. 
                    It's a great reminder that community is not just a group of people, 
                    it's the sharing of ideas, experiences, and knowledge. 
                    Feel free to check back regularly for new updates from the community 
                    so we can still be together while apart!
                </p>
            </div>
        </div>
    );
};

/*
            <div className="buttons">
                <table>
                    <tr>
                        <td>
                            <button class="button">💜 To Get Support 💜</button>
                        </td>
                        <td>
                            <button class="button">💻 To Hustle 💻</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button class="button">📖 To Relax 📖</button>
                        </td>
                        <td>
                            <button class="button">🎟️ To Attend 🎟️</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button class="button">💫 To Host 💫</button>
                        </td>
                        <td>
                            <button class="button">Submit A Resource</button>
                        </td>
                    </tr>
                </table>
            </div>
*/
export default Home;