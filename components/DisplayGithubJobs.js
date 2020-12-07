import React from 'react';
import { Link } from 'react-router-dom';
import {GithubJobsStyle} from '../pages/style';


function DisplayGithubJobs({ githubJob }) {
    return (
        <GithubJobsStyle>
            <img src={githubJob.company_logo} alt="" />
            <div>
                <p>{githubJob.company}</p>    
                <h2><Link to={`/details/${githubJob.id}`}>{githubJob.title}</Link></h2>
                <p>{githubJob.type}</p>
            </div>
            <div>
                <p>{githubJob.location}</p>
                <p>{githubJob.created_at}</p>
            </div>
        </GithubJobsStyle>
    )
}

export default DisplayGithubJobs
