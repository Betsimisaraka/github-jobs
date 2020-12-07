import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GithubJobs from '../components/GithubJobs'; 
import GithubJobsDetails from '../components/GithubJobsDetails';

function App() {
    return (
        <div>
            <h1>Github jobs</h1>
            <Switch>
                <Route exact path="/">
                    <GithubJobs />
                </Route>
                <Route path="/details/:id">
                    <GithubJobsDetails />
                </Route>
            </Switch>
        </div>
    )
}

export default App
