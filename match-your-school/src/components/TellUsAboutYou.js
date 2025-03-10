import React, { useState } from "react";
import './TellUsAboutYou.css';

function TellUsAboutYou() {
    const [selectedCity, setSelectedCity] = useState('');

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const handleExplore = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return(
        <div className="tellus-page">
            <h1>Tell Us About You</h1>
            <div className="dropdown-container">
                <label htmlFor="citySelect1">Which city do you like?</label>
                <select 
                    id="citySelect1"
                    value={selectedCity} 
                    onChange={handleCityChange}
                >
                    <option value="" disabled>Select a city</option>
                    <option value="canberra">Canberra</option>
                </select>

                


                <button 
                    className='submit'
                    onClick={handleExplore}
                    type="button"
                    style={{cursor: 'pointer'}}>
                    Submit
                </button>

            </div>
        </div>
    );
}

export default TellUsAboutYou;