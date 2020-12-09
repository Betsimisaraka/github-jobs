import React from 'react';
import { Link } from 'react-router-dom';
import {GithubJobsStyle} from '../pages/style';
import { AiOutlineClockCircle } from 'react-icons/ai';


function DisplayGithubJobs({ githubJob }) {
    return (
        <Link to={`/details/${githubJob.id}`}>
            <GithubJobsStyle>
                <img className="logo" src={githubJob.company_logo} alt="" />
                <div className="info_container">
                    <p className="company">{githubJob.company}</p>    
                    <h2 className="title">{githubJob.title}</h2>
                    <p className="type">{githubJob.type}</p>
                </div>
                <p className="location-city location">{githubJob.location}</p>
                <p className="creation"><AiOutlineClockCircle /> {githubJob.created_at}</p>
            </GithubJobsStyle>
        </Link>
    )
}

export default DisplayGithubJobs
