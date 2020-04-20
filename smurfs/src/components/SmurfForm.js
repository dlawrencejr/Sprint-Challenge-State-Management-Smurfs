import React, { useState } from 'react';
import "../components/App.css";

const SmurfsForm = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurfs(newSmurf);
        setNewSmurf({
            name: "",
            age: "",
            height:""
        });
    };

    const handleChanges = e => {
       setNewSmurf({ 
           ...newSmurf, 
           [e.target.name]: e.target.value 
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className='input-name'
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={handleChanges}
                    value={newSmurf.name} />
                <input
                    className='input-age'
                    type="text"
                    name="age"
                    placeholder="age"
                    onChange={handleChanges}
                    value={newSmurf.age} />
                <input
                    className='input-height'
                    type="text"
                    name="height"
                    placeholder="height"
                    onChange={handleChanges}
                    value={newSmurf.height}
                />
                <button className = "submitButton" type="submit">Add New Smurf</button>
            </form>
        </div>
    );
};

export default SmurfsForm;