import React, {useState, useEffect} from 'react';

import Resource from './Resource';
import './ResourcePages.css';

const axios = require("axios").default;

const Host = () => {

    const [resources, setResources] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://project-alone-together.wl.r.appspot.com/api/v1/resources/ToHost`);
            setResources(result.data.data);
          };
          fetchData();
    });

    return(
        <div>
            <div className="header">
                <h1>💫 To Host 💫</h1>
                <h2>Coordinate a Virtual Meet up!</h2>
            </div>
            <div className="header-description">
                <p>
                    Want to host a virtual book club? Study hall? Sharing circle? Watch party? 
                    Whatever it is, pitch your idea below and leave your contact info so others can join in. 
                    Once it's official, feel free to add to the "To Attend" tab to get some more RSVPS!
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

export default Host;