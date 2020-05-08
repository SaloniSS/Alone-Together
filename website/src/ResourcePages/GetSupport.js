import React, { useState, useEffect} from 'react';

import Resource from './Resource'; 
import './ResourcePages.css';

const axios = require("axios").default;

const GetSupport = () => {

    const [resources, setResources] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://project-alone-together.wl.r.appspot.com/api/v1/resources/ToGetSupport`);
            setResources(result.data.data);
          };
          fetchData();
    });

    return(
        <div>
            <div className="header">
                <h1>💜 Get Supported 💜</h1>
                <h2>Online Resources</h2>
            </div>
            <div className="header-description">
                <p>
                    Share free resources on how to cope with anxiety and stress from the coronavirus. 
                    Articles, guidebooks, or resources that other brands / organizations have created. 
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

export default GetSupport;