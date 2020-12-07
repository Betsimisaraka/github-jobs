import React from 'react';
import GithubJobs from '../components/GithubJobs';
import GithubJobsHeader from './GithubJobsHeader';

function App() {
    return (
        <div>
            <h1>My github jobs</h1>
            <GithubJobsHeader />
            <GithubJobs />
        </div>
    )
}

export default App
