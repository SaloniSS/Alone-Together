import React, { useState }  from 'react';
import { Link } from 'react-router-dom';

import './AddResource.css'

const axios = require("axios").default;

const AddResource = (props) => {
    
    const [enteredCategory, setEnteredCategory] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredMedium, setEnteredMedium] = useState('');
    const [enteredLink, setEnteredLink] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredSubmittedBy, setEnteredSubmittedBy] = useState('');

    const addResourceHandler = event => {
        event.preventDefault();

        const newResource = {
            id: Math.random().toString(),
            category: enteredCategory,
            name: enteredName,
            medium: enteredMedium,
            link: enteredLink,
            description: enteredDescription,
            submittedBy: enteredSubmittedBy
        };

        console.log(newResource);

        axios.post('https://project-alone-together.wl.r.appspot.com/api/v1/resources', {
            category: newResource.category,
            title: newResource.name,
            medium: newResource.medium,
            url: newResource.link,
            description: newResource.description
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        setEnteredCategory('');
        setEnteredName('');
        setEnteredMedium('');
        setEnteredLink('');
        setEnteredDescription('');
        setEnteredSubmittedBy('');
        
    };

    const categoryChangeHandler = event => {
        setEnteredCategory(event.target.value);
    };

    const nameChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const mediumChangeHandler = event => {
        setEnteredMedium(event.target.value);
    };

    const linkChangeHandler = event => {
        setEnteredLink(event.target.value);
    };

    const descriptionChangeHandler = event => {
        setEnteredDescription(event.target.value);
    };

    const submittedChangeHandler = event => {
        setEnteredSubmittedBy(event.target.value);
    };

    return(
        <div>
            <div className="resource-header">
                <h1>Add Resource</h1>
            </div>
            <div className="form">
                <form className="new-resource" onSubmit={addResourceHandler} method="post" action="/add-new-resource"> 
                    <label> Category:
                        <select value={enteredCategory} onChange={categoryChangeHandler} required>
                            <option value="">Select A Category</option>
                            <option value="ToGetSupport">To Get Support</option>
                            <option value="ToHustle">To Hustle</option>
                            <option value="ToRelax">To Relax</option>
                            <option value="ToAttend">To Attend</option>
                            <option value="ToHost">To Host</option>
                        </select>
                    </label> <br />
                    <label> Name of Resource:
                        <input type="text" value={enteredName} onChange={nameChangeHandler} placeholder="Name" required/>
                    </label> <br />
                    <label> Medium:
                        <select value={enteredMedium} onChange={mediumChangeHandler} required>
                            <option value="">Select A Medium</option>
                            <option value="Website">Website</option>
                            <option value="Article">Article</option>
                            <option value="Podcast">Podcast</option>
                            <option value="Workshop">Workshop</option>
                            <option value="Organization">Organization</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Misc.">Other</option>
                        </select>
                    </label> <br />
                    <label> Link: 
                        <input type="url" value={enteredLink} onChange={linkChangeHandler} placeholder="Link" required/>
                    </label> <br />
                    <label> Description: 
                        <input type="text" value={enteredDescription} onChange={descriptionChangeHandler} placeholder="Description" required/>
                    </label> <br />
                    <label> Submitted By: 
                        <input type="text" value={enteredSubmittedBy} onChange={submittedChangeHandler} placeholder="Submitted By"/>
                    </label> <br />
                    <Link to ='/' >
                        <button className="resource-button">Cancel</button>
                    </Link>
                    <button className="resource-button" type="submit">Add Goal</button>
                </form>
            </div>
        </div>
    );
};

export default AddResource;