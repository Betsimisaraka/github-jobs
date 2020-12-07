import React, { useContext, useEffect, useState } from 'react';
import GithubJobs from '../components/GithubJobs';
import {GlobalContext} from '../pages/GithubJobsContext';

function Options() {
    const [city, setCity] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const { state, dispatch } = useContext(GlobalContext);
    const { githubJobs } = state;
    console.log(isChecked);

    function handleTheFullTimeJob(e) {
        const { name, type, checked } = e.target
        type ==="checkbox" && setIsChecked({ [name]: checked })

        const filteredTheFullTimeJob = githubJobs.filter(githubJob => githubJob.type !== "Full time")
            console.log(filteredTheFullTimeJob);
        dispatch({ type: "FULL_TIME", filteredTheFullTimeJob });
    }

    useEffect(() => {
        const filteredTheCityJob = githubJobs.filter(githubJob => githubJob.location.toLowerCase().includes(city.toLowerCase()))
        dispatch({ type: "CITY", filteredTheCityJob });
    }, [city]);

    function handleChange(e) {
        const { name, type, checked } = e.target
        type ==="checkbox" && setIsChecked({ [name]: checked })
    }


    return (
        <div>
            <form>
                <fieldset>
                    <input type="checkbox" name="fullTime" onChange={handleTheFullTimeJob} />
                    <label>Full time</label>
                </fieldset>
                <fieldset>
                    <label>Location</label>
                    <input type="text" value={city} name="location" onChange={e => setCity(e.target.value)} placeholder="City, state, zip code or country" />
                </fieldset>
                <fieldset>
                    <input type="checkbox" name="london" onChange={handleChange} />
                    <label>London</label>
                </fieldset>
                <fieldset>
                    <input type="checkbox" name="amsterdam" onChange={handleChange} />
                    <label>Amsterdam</label>
                </fieldset>
                <fieldset>
                    <input type="checkbox" name="newWork" onChange={handleChange} />
                    <label>New Work</label>
                </fieldset>
                <fieldset>
                    <input type="checkbox" name="berlin" onChange={handleChange} />
                    <label>Berlin</label>
                </fieldset>
            </form>
        </div>
    )
}

export default Options
