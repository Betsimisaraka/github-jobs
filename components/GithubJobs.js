import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../pages/GithubJobsContext';
import DisplayGithubJobs from '../components/DisplayGithubJobs';
import { UlStyle } from '../pages/style';
import GithubJobsHeader from '../pages/GithubJobsHeader';
import Options from '../pages/Options';

const CORS = "https://cors-anywhere.herokuapp.com/";
const API = "https://jobs.github.com/positions.json"

function GithubJobs() {
    const { state, dispatch } = useContext(GlobalContext);
    const { githubJobs, isLoading } = state;

    useEffect(() => {
        setTimeout(() => {
            async function fetchData() {
                const response = await fetch(CORS + API);
                const data = await response.json();
                dispatch({ type: "FETCH_JOBS", githubJob: data });
            }
            fetchData();
        }, 500);
    }, [])

    return (
        <div>
            <GithubJobsHeader />
            {isLoading && 'Loading...'}
            <UlStyle>
                {!isLoading && 
                githubJobs.map(githubJob => (
                    <DisplayGithubJobs key={githubJob.id} githubJob={githubJob} />
                ))}
            </UlStyle>
            <Options />
        </div>
    )
}

export default GithubJobs
