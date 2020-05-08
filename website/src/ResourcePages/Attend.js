import React, {useState, useEffect} from 'react';

import Resource from './Resource';
import './ResourcePages.css';

const axios = require("axios").default;

const Attend = () => {

    const [resources, setResources] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://project-alone-together.wl.r.appspot.comm/api/v1/resources/ToAttend`);
            setResources(result.data.data);
          };
          fetchData();
    });

    return(
        <div>
            <div className="header">
                <h1>🎟️ Attend 🎟️</h1>
                <h2>Let's Meet up virtually!</h2>
            </div>
            <div className="header-description">
                <p>
                    Share free virtual events that other individuals, brands or organizations are hosting. 
                    We'll see you there!  
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

export default Attend;