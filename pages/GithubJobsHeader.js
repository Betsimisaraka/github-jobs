import React, { useContext, useState } from 'react'
import { GlobalContext } from '../pages/GithubJobsContext';

function GithubJobsHeader() {
    const [value, setValue] = useState('');
    const { state, dispatch } = useContext(GlobalContext);
    const { githubJobs } = state;

    function handleSubmit(e) {
        e.preventDefault();
        const input = e.target.searchJobs.value;
        const inputToLowerCase = input.toLowerCase();
        console.log(inputToLowerCase);
        const filteredGithubJobs = githubJobs
            .filter(githubJob => githubJob.title.toLowerCase().includes(inputToLowerCase)
            || githubJob.company.toLowerCase().includes(inputToLowerCase));
            if (filteredGithubJobs !== inputToLowerCase) {
                return 'No item muches'
            }
        dispatch({ type: "SEARCH_GITHUB_JOBS", filteredGithubJobs })
    }

    return (
        <div className="header_container">
            <form className="header_form" onSubmit={handleSubmit}>
                <fieldset className="header_fieldset">
                    <input className="header_input" 
                        type="text"
                        value={value}
                        name="searchJobs"
                        onChange={e => setValue(e.target.value)} 
                        placeholder="Title, companies, expertise or benefits" />
                    <button className="header_button">Search</button> 
                </fieldset>
            </form>
        </div>
    )
}

export default GithubJobsHeader
