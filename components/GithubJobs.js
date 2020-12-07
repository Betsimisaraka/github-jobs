import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../pages/GithubJobsContext';
import DisplayGithubJobs from '../components/DisplayGithubJobs';

const CORS = "https://cors-anywhere.herokuapp.com/";
const API = "https://jobs.github.com/positions.json"

function GithubJobs() {
    const { state, dispatch } = useContext(GlobalContext);
    const { githubJobs, isLoading } = state;

    useEffect(() => {
        setTimeout(() => {
            async function fetchData() {
                const response = await fetch(CORS + API);
                console.log(response);
                const data = await response.json();
                console.log(data);
                dispatch({ type: "FETCH_JOBS", githubJob: data });
            }
            fetchData();
        }, 500);
    }, [])

    console.log(githubJobs);

    return (
        <div>
            <h2>Fetch data</h2>
            {isLoading && 'Loading...'}
            {!isLoading && 
            githubJobs.map(githubJob => (
                <DisplayGithubJobs key={githubJob.id} githubJob={githubJob} />
            ))}
        </div>
    )
}

export default GithubJobs
