import React from 'react';
import styled from 'styled-components';

const GithubJobsStyle = styled.li`
    dispaly: grid;
    grid-tempate-columns: auto 1fr 1fr;
    column-gap: 20px;
    img {
        width: 100%;
        border-radius: 4px;
    }
`;

function DisplayGithubJobs({ githubJob }) {
    return (
        <GithubJobsStyle>
            <img src={githubJob.company_logo} alt="" />
            <div>
                <p>{githubJob.company}</p>    
                <h2>{githubJob.title}</h2>
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
