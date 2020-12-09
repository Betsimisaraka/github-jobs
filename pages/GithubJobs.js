import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './GithubJobsContext';
import DisplayGithubJobs from '../components/DisplayGithubJobs';
import { UlStyle } from './style';
import GithubJobsHeader from '../components/GithubJobsHeader';
import Options from '../components/Options';

export const CORS = "https://cors-anywhere.herokuapp.com/";

function GithubJobs() {
    const { state, dispatch } = useContext(GlobalContext);
    const { githubJobs, isLoading, location, description, fullTime } = state;

    useEffect(() => {
        setTimeout(() => {
            async function fetchData() {
                const CORS = "https://cors-anywhere.herokuapp.com/";
                const URL_API = `https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${fullTime}&markdown=true`;
                const response = await fetch(CORS + URL_API);
                const data = await response.json();
                dispatch({ type: "FETCH_JOBS", githubJob: data });
            }
            fetchData();
        }, 500);
    }, [ description, fullTime, location ]);

    return (
        <div>
            <GithubJobsHeader />
            <div className="main_container">    
                <Options />
                {isLoading && 'Loading...'}
                <UlStyle>
                    {!isLoading && githubJobs.length > 0 &&
                    githubJobs.map(githubJob => (
                        <DisplayGithubJobs key={githubJob.id} githubJob={githubJob} />
                    ))}
                    {!isLoading && githubJobs.length === 0 && 
                     <p>No results found</p> }
                </UlStyle>
            </div>
        </div>
    )
}

export default GithubJobs
