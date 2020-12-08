import React, { useContext, useEffect, useState } from 'react';
import {GlobalContext} from '../pages/GithubJobsContext';
import { CORS } from '../components/GithubJobs';

function Options() {
    const [city, setCity] = useState('');
    const [checked, setChecked] = useState(true);
    const { state, dispatch } = useContext(GlobalContext);
    const { githubJobs } = state;

    const FULL_TIME = "https://jobs.github.com/positions.json?description=python&full_time=true&location=sf";
    const NEW_YORK = "https://jobs.github.com/positions.json?description=python&location=new+york";
    const LONDON = "https://jobs.github.com/positions.json?description=python&location=london";
    const AMSTERDAM = "https://jobs.github.com/positions.json?description=python&location=amsterdam";
    const BERLIN = "https://jobs.github.com/positions.json?description=python&location=berlin";

    async function handleTheFullTimeJob(e) {
        const inputFullTime = e.target;
        if (inputFullTime.checked) {
            const res = await fetch(CORS + FULL_TIME);
            const filteredTheFullTimeJob = await res.json()
            console.log(filteredTheFullTimeJob);
            dispatch({ type: "FULL_TIME", filteredTheFullTimeJob });
        }
    }

    useEffect(() => {
        const filteredTheCityJob = githubJobs.filter(githubJob => githubJob.location.toLowerCase().includes(city.toLowerCase()))
        dispatch({ type: "CITY", filteredTheCityJob });
    }, [city]);

    async function handleLondonJob(e) {
        const inputLondon = e.target;
        if (inputLondon.checked) {
            const res = await fetch(CORS + LONDON);
            const filteredLondonJob = await res.json()
            console.log(filteredLondonJob);
            dispatch({ type: "LONDON", filteredLondonJob });
        }
    }

    async function handleAmsterdamJob(e) {
        const inputAmsterdam = e.target;
        if (inputAmsterdam.checked) {
            const res = await fetch(CORS + AMSTERDAM);
            const filteredAmsterdamJob = await res.json()
            console.log(filteredAmsterdamJob);
            dispatch({ type: "AMSTERDAM", filteredAmsterdamJob });
        }
    }

    async function handleDefaultChecked(e) {
        const inputDefault = e.target;
        console.log(inputDefault);
        if (inputDefault.checked) {
            const res = await fetch(CORS + NEW_YORK);
            const data = await res.json()
            console.log(data);
            dispatch({ type: "DEFAULT", data });
        }
    }

    async function handleBerlinJob(e) {
        const inputBerlin = e.target;
        console.log(inputBerlin);
        if (inputBerlin.checked) {
            const res = await fetch(CORS + BERLIN);
            console.log(res);
            const filteredBerlinJob = await res.json();
            console.log(filteredBerlinJob);
            dispatch({ type: "BERLIN", filteredBerlinJob });
        }
    }

    return (
        <div>
            <form className="options_form">
                <fieldset>
                    <input type="checkbox" name="fullTime" onChange={handleTheFullTimeJob} />
                    <label>Full time</label>
                </fieldset>
                <fieldset className="options_location">
                    <label className="options_location-label">Location</label>
                    <input className="options_location-input" type="text" value={city} name="location" onChange={e => setCity(e.target.value)} placeholder="City, state, zip code or country" />
                </fieldset>
                <fieldset>
                    <input type="checkbox" name="london" onChange={handleLondonJob} />
                    <label>London</label>
                </fieldset>
                <fieldset>
                    <input type="checkbox" name="amsterdam" onChange={handleAmsterdamJob} />
                    <label>Amsterdam</label>
                </fieldset>
                <fieldset>
                    <input type="checkbox" name="newYork" onChange={handleDefaultChecked} />
                    <label>New York</label>
                </fieldset>
                <fieldset>
                    <input type="checkbox" name="berlin" onChange={handleBerlinJob} />
                    <label>Berlin</label>
                </fieldset>
            </form>
        </div>
    )
}

export default Options
