import React from 'react'

function DisplayGithubJobs({ githubJob }) {
    return (
        <div>
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
        </div>
    )
}

export default DisplayGithubJobs
