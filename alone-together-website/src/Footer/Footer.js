import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="header">
                <h2 >Quick Links</h2>
            </div>
            <table>
                <tr>
                    <th> <Link to ='/' > <p>🌟 Together Alone : Home Page🌟</p> </Link> </th>
                    <th></th>
                    <th> <Link to ='/add-resource' > <p>Submit A Resource</p> </Link></th>
                </tr>
                <tr>
                    
                    <th> <Link to ='/get-support' > <p>💜 To Get Support 💜</p> </Link> </th>
                    <th> <Link to ='/hustle' > <p>💻 To Hustle 💻</p> </Link> </th>
                    <th> <Link to ='/relax' >  <p>📖 To Relax 📖</p> </Link> </th>
                </tr>
                <tr>
                    <th> <Link to ='/attend' > <p>🎟️ To Attend 🎟️</p> </Link></th>
                    <th></th>
                    <th> <Link to ='/host' > <p>💫 To Host 💫</p> </Link></th>
                    
                </tr>
            </table>
            <div className="header">
                <p>Made with 💖 by <a href="https://www.saloni-shivdasani.codes" target="_blank">Saloni Shivdasani</a> </p>
            </div>
        </div>
    );
};

export default Footer;