import React, { useContext, useEffect, useState } from 'react';
import {GlobalContext} from '../pages/GithubJobsContext';

function Options({ filter }) {

    const { state, dispatch } = useContext(GlobalContext);
    const { githubJobs } = state;

    const [location, setLocation] = useState('');
    const [selectedCities, setSelectedCities] = useState(null);
    const [fullTime, setFullTime] = useState(false);

    let cities = [
        { id: 1, city: "London" },
        { id: 2, city: "Amsterdam" },
        { id: 3, city: "New york" },
        { id: 4, city: "Berling" }
    ];

    function handleClick() {
        setFullTime(!fullTime);
        dispatch({ type: "fulltime", value: true });
    }

    function handleCity(city) {
        if (selectedCities && city.id === selectedCities.id) {
            setSelectedCities(null);
            dispatch({ type: "location", value: ""})
        } else {
            setSelectedCities(city);
            dispatch({ type: "location", value: city.city})
        }
    }

    function handleLocation(e) {
        if (e.key === "Enter") {
            setSelectedCities(null)
            dispatch({ type: "location", value: location})
        }
    }

    useEffect(() => {
        setSelectedCities(cities[2]);
    }, [])
    

    return (
        <div>
            <form className="options_form">
                <fieldset>
                    <input type="checkbox" name="fullTime" checked={fullTime} onChange={handleClick} />
                    <label>Full time</label>
                </fieldset>
                <fieldset className="options_location">
                    <label className="options_location-label">Location</label>
                    <input className="options_location-input" type="text" 
                        value={location} name="location" 
                        onChange={e => setLocation(e.target.value)} 
                        placeholder="City, state, zip code or country" 
                        onKeyDown={handleLocation} />
                </fieldset>
                <div>
                    {cities.map(city => (
                        <fieldset key={city.id}>    
                            <input 
                            type="checkbox" 
                            checked={selectedCities ? city.id === selectedCities.id: false} 
                            onChange={() => handleCity(city)} />
                            <label>{city.city}</label>
                        </fieldset>
                    ))}
                </div>
            </form>
        </div>
    )
}

export default Options
