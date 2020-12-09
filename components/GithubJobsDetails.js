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
        <div className="details">
            <div className="more_info">
                <p><Link to="/" className="go_back">⬅ Back to search</Link></p>
                <p className="apply">How to upply</p>
                <p className="link">{findTheSameId.how_to_apply}</p>    
            </div>
            <div className="details_container">
                <div className="title_type_creation">
                    <h2 className="detail_title">{findTheSameId.title}</h2>
                    <p className="type detail_type">{findTheSameId.type}</p>
                    <p className="creation detail_creation">{findTheSameId.created_at}</p>
                </div>
                <div className="logo_company_location">
                    <img className="detail_logo" src={findTheSameId.company_logo} alt={`Logo of this componey ${findTheSameId.company}`} />
                    <h3 className="detail_company">{findTheSameId.company}</h3>
                    <p className="detail_location location">{findTheSameId.location}</p>
                </div>
                <p className="description">{findTheSameId.description}</p>
            </div>
        </div>
    )
}

export default GithubJobsDetails
