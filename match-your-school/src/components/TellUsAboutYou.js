import React, { useState } from "react";
import './TellUsAboutYou.css';

function TellUsAboutYou() {
    const [selectedCity, setSelectedCity] = useState('');

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    return(
        <div className="tellus-page">
            <h1>Tell Us About You</h1>
            <div className="dropdown-container">
                <label htmlFor="citySelect">Which city do you like?</label>
                <select 
                    id="citySelect"
                    value={selectedCity} 
                    onChange={handleCityChange}
                >
                    <option value="" disabled>Select a city</option>
                    <option value="canberra">Canberra</option>
                </select>
            </div>
        </div>
    );
}

export default TellUsAboutYou;