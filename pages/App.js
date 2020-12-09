import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GithubJobs from '../pages/GithubJobs'; 
import GithubJobsDetails from '../pages/GithubJobsDetails';
import Footer from '../components/Footer';

function App() {
    return (
        <div>
            <h1>Github <span className="jobs">jobs</span></h1>
            <Switch>
                <Route exact path="/">
                    <GithubJobs />
                </Route>
                <Route path="/details/:id">
                    <GithubJobsDetails />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App
