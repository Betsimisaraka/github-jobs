import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GlobalContext } from '../pages/GithubJobsContext';

function GithubJobsDetails() {
    const { id } = useParams();
    console.log(id);

    const { state } = useContext(GlobalContext);
    const { githubJobs } = state;
    console.log(githubJobs);

    const findTheSameId = githubJobs.find(githubJob => githubJob.id !== id);
    console.log(findTheSameId);

    return (
        <div>
            <div>
                <p><Link to="/">⬅ Back to search</Link></p>
                <p>How to upplay</p>
                <p>{findTheSameId.how_to_apply}</p>    
            </div>
            <div>
                <div>
                    <h2>{findTheSameId.title}</h2>
                    <p>{findTheSameId.type}</p>
                    <p>{findTheSameId.created_at}</p>
                </div>
                <div>
                    <img src={findTheSameId.company_logo} alt={`Logo of this componey ${findTheSameId.company}`} />
                    <h3>{findTheSameId.company}</h3>
                    <p>{findTheSameId.location}</p>
                </div>
                <p>{findTheSameId.description}</p>
            </div>
        </div>
    )
}

export default GithubJobsDetails
