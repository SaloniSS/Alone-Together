import React, {useState, useEffect} from 'react';

import Resource from './Resource';
import './ResourcePages.css';

const axios = require("axios").default;

const Hustle = () => {

    const [resources, setResources] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://project-alone-together.wl.r.appspot.com/api/v1/resources/ToHustle`);
            setResources(result.data.data);
          };
          fetchData();
    });

    return(
        <div>
            <div className="header">
                <h1>💻 To Hustle 💻</h1>
                <h2>Getting to Werk</h2>
            </div>
            <div className="header-description">
                <p>
                    We know you've been keeping busy! 
                    Share with us the side projects or business ideas that you're working on. 
                    Tell us if you just want some love or if you have a request for virtual help in any way. 
                    Don't have a project? Browse the incredible things your community members are building! 
                    Or drop links to free resources to staying productive.
                </p>
            </div>
            <div className="resource">
                {resources.map (resource => (
                    <Resource resource={resource}/>
                ))}
            </div>
        </div>       
    );
}

export default Hustle;